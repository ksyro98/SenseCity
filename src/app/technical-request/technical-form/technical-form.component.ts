import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Service} from '../../entities/Service';
import {TechnicalRequest} from '../../entities/TechnicalRequest';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {TechnicalRequestLogicService} from '../technical-request-logic/technical-request-logic.service';
import {RecommendationsModalComponent} from '../recommendations/recommendations-modal/recommendations-modal.component';
import {ModalController} from '@ionic/angular';
import {Location} from '@angular/common';
import {Observable, merge, Subscriber} from 'rxjs';
import {VerifyModalComponent} from '../../profile/verify-modal/verify-modal.component';
import {AlertService} from '../../view-utils/alert-service/alert.service';
import {Plugins} from '@capacitor/core';
import {Recommendation} from '../../entities/Recommendation';

const { Toast } = Plugins;

@Component({
  selector: 'app-technical-form',
  templateUrl: './technical-form.component.html',
  styleUrls: ['./technical-form.component.scss'],
})

export class TechnicalFormComponent implements OnInit {

  public canProceed = true;
  public currentStep = 0;
  public loading = false;
  private anonymousAllowed = false;
  unverifiedEmailAllowed = true;
  unverifiedSmsAllowed = true;
  namedClicked: boolean;

  newRequestTxt = 'Νέα Αίτηση';
  verifyTxt = 'Επιβεβαίωση';
  submittedSuccessfullyTxt = 'Το αίτημά σας υποβλήθηκε με επιτυχία.';
  wentWrongTxt = 'Ωχ, κάτι δεν πήγε καλά. Παρακαλώ δοκιμάστε ξανά.';
  warningTxt = 'Προσοχή!';
  sendNamedTxt = 'Πρέπει να στείλετε μια επώνυμη αναφορά.';
  updatedSuccessfullyTxt = 'Το ζήτημα ενημερώθηκε με επιτυχία.';
  needToVerify1Txt = 'Πρέπει να επιβεβαιώσετε το ';
  needToVerify2Txt = ' και το ';
  needToVerify3Txt = ' για να υποβάλει αυτό το αίτημα.';
  emailTxt = 'email';
  mobilePhoneTxt = 'τηλέφωνο';

  constructor(
      private router: ActivatedRoute,
      private localTranslateService: LocalTranslateService,
      public logic: TechnicalRequestLogicService,
      private alertService: AlertService,
      private modalController: ModalController,
      private location: Location
  ) { }

  ngOnInit() {
    this.localTranslateService.translateLanguage();

    this.router.queryParams.subscribe(params => {
      const selectedService = {
        id: parseInt(params.service_id, 10),
        name: params.service_name,
        icon: params.service_iconm,
        translationKey: params.service_translation_key
      };

      const defaultSubService = Service.getSubService(selectedService.id)[0];

      this.logic.request = new TechnicalRequest(
          selectedService, defaultSubService, '', '', {type: 'point', coordinates: []}, false);

      this.setTranslationPairs();
    });
  }

  setCanProceed(canProceed: boolean){
    this.canProceed = canProceed;
  }

  goToNextStep(nextStep: number){
    this.loading = true;
    this.doActionBeforeStepChange(nextStep).subscribe(new Subscriber({
      next: (x) => {
        this.manageNexStepMapResponse(x);
      },
      error: (err) => console.log(err),
      complete: () => {
        this.currentStep = nextStep < 4 ? nextStep : 3;
        this.loading = false;
      },
    }));
  }

  manageNexStepMapResponse(response){
    switch (response.type) {
      case TechnicalRequestLogicService.POLICY_EMAIL_SMS_REQUEST:
        this.unverifiedEmailAllowed = response.value[0].mandatory_email === 'false';
        this.unverifiedSmsAllowed = response.value[0].mandatory_sms === 'false';
        break;
      case TechnicalRequestLogicService.POLICY_ANONYMITY_REQUEST:
        this.anonymousAllowed = response.value[0].anonymous ? (response.value[0].anonymous === 'true') : undefined;
        if (this.namedClicked === undefined) {
          this.namedClicked = !this.anonymousAllowed && this.anonymousAllowed !== undefined;
        }
        break;
      case TechnicalRequestLogicService.RECOMMENDATIONS_REQUEST:
        const recommendations = response.value[0].bugs.map((e) => new Recommendation(e));
        this.showRecommendations(recommendations);
        break;
      case TechnicalRequestLogicService.NEW_ISSUE_REQUEST:
        if (response.value.description === 'ok'){
          Toast.show({text: this.submittedSuccessfullyTxt});
          this.location.back();
        }
        else{
          Toast.show({text: this.wentWrongTxt});
        }
        break;
    }
  }

  onCommentsChange(comments: string){
    this.logic.request.comments = comments;
  }

  onLocationChange(latlng: number[]){
    this.logic.request.location = {type: 'Point', coordinates: latlng};
  }

  private doActionBeforeStepChange(nextStep: number): Observable<any>{
    if (nextStep === 3){
      const policyAboutEmailsSms$: Observable<any> = this.logic.getPolicyAboutEmailsSms();
      const policyAboutAnonymity$: Observable<any> = this.logic.getPolicyAboutAnonymity();
      const recommendations$: Observable<any> = this.logic.getRecommendations();

      return merge(policyAboutEmailsSms$, policyAboutAnonymity$, recommendations$);
    }
    else if (nextStep === 4){
      if (!this.anonymousAllowed && !this.namedClicked){
        this.alertService.show(
            {
              head: this.warningTxt,
              body: this.sendNamedTxt
            },
            () => {},
            true,
            true
            );
        return new Observable<any>(subscriber => subscriber.complete());
      }
      else{
        return this.logic.addNewIssue();
      }
    }
    else{
      return new Observable<any>(subscriber => subscriber.complete());
    }
  }

  private showRecommendations(recommendations: Recommendation[]){
    RecommendationsModalComponent.present(this.modalController, recommendations, (recommendation) => {
      if (recommendation){
        Toast.show({text: this.updatedSuccessfullyTxt});
        this.location.back();
      }
      else if (recommendation === null){
        Toast.show({text: this.wentWrongTxt});
      }
    });
  }

  shouldShowVerificationSnackBar(): boolean {
    return (!this.unverifiedEmailAllowed && !this.logic.isEmailVerified()) ||
        (!this.unverifiedSmsAllowed && !this.logic.isPhoneVerified());
  }

  getVerificationSnackBarText(): string {
    let text = this.needToVerify1Txt;
    const emailNeeded = !this.unverifiedEmailAllowed && !this.logic.isEmailVerified();
    const phoneNeeded = !this.unverifiedSmsAllowed && !this.logic.isPhoneVerified();

    text += emailNeeded ? this.emailTxt : '';
    text += (emailNeeded && phoneNeeded) ? this.needToVerify2Txt : '';
    text += phoneNeeded ? this.mobilePhoneTxt : '';

    return text + this.needToVerify3Txt;
  }

  presentVerificationModal(){
    VerifyModalComponent.present(
        this.modalController,
        this.logic.getEmailProfileElement(),
        (result: boolean) => {
          if (result) {
            this.logic.setIsUserActive();
          }
        });
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'new-request', callback: (res: string) => this.newRequestTxt = res});
    this.localTranslateService.pairs.push({key: 'verify', callback: (res: string) => this.verifyTxt = res});
    this.localTranslateService.pairs.push({key: 'submitted-successfully', callback: (res: string) => this.submittedSuccessfullyTxt = res});
    this.localTranslateService.pairs.push({key: 'went-wrong', callback: (res: string) => this.wentWrongTxt = res});
    this.localTranslateService.pairs.push({key: 'warning', callback: (res: string) => this.warningTxt = res});
    this.localTranslateService.pairs.push({key: 'send-named', callback: (res: string) => this.sendNamedTxt = res});
    this.localTranslateService.pairs.push({key: 'updated-successfully', callback: (res: string) => this.updatedSuccessfullyTxt = res});
    this.localTranslateService.pairs.push({key: 'need-to-verify-1', callback: (res: string) => this.needToVerify1Txt = res});
    this.localTranslateService.pairs.push({key: 'need-to-verify-2', callback: (res: string) => this.needToVerify2Txt = res});
    this.localTranslateService.pairs.push({key: 'need-to-verify-3', callback: (res: string) => this.needToVerify3Txt = res});
    this.localTranslateService.pairs.push({key: 'email-lc', callback: (res: string) => this.emailTxt = res});
    this.localTranslateService.pairs.push({key: 'phone-number-lc', callback: (res: string) => this.mobilePhoneTxt = res});
    this.localTranslateService.pairs.push({key: this.logic.request.subService.translationKey,
      callback: (res: string) => this.logic.request.subService.name = res});
  }
}
