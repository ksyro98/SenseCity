import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Service} from '../../entities/Service';
import {TechnicalRequest} from '../../entities/TechnicalRequest';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {TechnicalRequestLogicService} from '../technical-request-logic/technical-request-logic.service';
import {RecommendationsModalComponent} from '../recommendations/recommendations-modal/recommendations-modal.component';
import {ModalController} from '@ionic/angular';
import {Location} from '@angular/common';
import {Observable, merge, Subscriber} from 'rxjs';
import {VerifyModalComponent} from '../../profile/verify-modal/verify-modal.component';
import {Plugins} from '@capacitor/core';
import {Recommendation} from '../../entities/Recommendation';
import {PermissionFlag} from '../../entities/utils/PermissionFlag';
import {ProfileElement} from '../../entities/ProfileElement';

const { Toast } = Plugins;

@Component({
  selector: 'app-technical-form',
  templateUrl: './technical-form.component.html',
  styleUrls: ['./technical-form.component.scss'],
})

export class TechnicalFormComponent implements OnInit {

  public canProceed = new PermissionFlag(true, '');
  public canSubmit = new PermissionFlag(true, '');
  public currentStep = 0;
  public loading = false;
  private anonymousAllowed = false;
  unverifiedEmailAllowed = true;
  unverifiedSmsAllowed = true;
  termsAcceptedClicked = true;

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
  missingDetailsTxt = 'Ορισμένες από τις απαιτούμενες λεπτομέρειες λείπουν από το προφίλ σας. Παρακαλούμε συμπληρώστε τες για να ' +
      'υποβάλετε αυτό το αίτημα.';
  goTxt = 'Πάμε';
  emailTxt = 'email';
  mobilePhoneTxt = 'τηλέφωνο';

  private verificationNeededTxt = '';
  private anonymousNotAllowedTxt = '';
  private termsNotAcceptedTxt = '';

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private localTranslateService: LocalTranslateService,
      public logic: TechnicalRequestLogicService,
      private modalController: ModalController,
      private location: Location,
      private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.localTranslateService.translateLanguage();

    this.activatedRoute.queryParams.subscribe(params => {
      const selectedService = {
        id: parseInt(params.service_id, 10),
        name: params.service_name,
        icon: params.service_iconm,
        translationKey: params.service_translation_key
      };

      const defaultSubService = Service.getSubServices(selectedService.id)[0];

      if (this.logic.request === undefined || this.logic.request.service.id !== selectedService.id){
        this.logic.request = new TechnicalRequest(
            selectedService, defaultSubService, '', '', {type: 'point', coordinates: []}, false);
      }

      this.setTranslationPairs();
      this.logic.setIsUserActive().subscribe({
        complete: () => {
          this.setCanSubmit();
        }
      });
    });
  }

  onCommentsChange(comments: string){
    this.logic.request.comments = comments;
  }

  onLocationChange(latlng: number[]){
    this.logic.request.location = {type: 'Point', coordinates: latlng};
  }

  goToNextStep(nextStep: number){
    if (!this.canProceedToNextStep(nextStep)){
      return;
    }

    this.loading = true;
    this.doActionBeforeStepChange(nextStep).subscribe(new Subscriber({
      next: (x) => {
        this.manageNexStepResponse(x);
      },
      error: (err) => console.log(err),
      complete: () => {
        this.currentStep = nextStep < 4 ? nextStep : 3;
        this.loading = false;
      },
    }));
  }

  private canProceedToNextStep(nextStep: number): boolean{
    if (nextStep === 3 && this.logic.request.location.coordinates.length === 0){
      return false;
    }
    return true;
  }

  private manageNexStepResponse(response){
    switch (response.type) {
      case TechnicalRequestLogicService.POLICY_EMAIL_SMS_REQUEST:
        if (response.value.length === 0){
          break;
        }
        this.unverifiedEmailAllowed = response.value[0].mandatory_email === 'false';
        this.unverifiedSmsAllowed = response.value[0].mandatory_sms === 'false';
        this.setCanSubmit();
        break;
      case TechnicalRequestLogicService.POLICY_ANONYMITY_REQUEST:
        if (response.value.length === 0){
          break;
        }
        this.anonymousAllowed = response.value[0].anonymous ? (response.value[0].anonymous === 'true') : undefined;
        this.setCanSubmit();
        break;
      case TechnicalRequestLogicService.RECOMMENDATIONS_REQUEST:
        const recommendations = response.value;
        if (recommendations.length > 0 && !this.isVerificationNeeded()) {
          this.showRecommendations(recommendations);
        }
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

  private doActionBeforeStepChange(nextStep: number): Observable<any>{
    if (nextStep === 3){
      const policyAboutEmailsSms$: Observable<any> = this.logic.getPolicyAboutEmailsSms();
      const policyAboutAnonymity$: Observable<any> = this.logic.getPolicyAboutAnonymity();
      const recommendations$: Observable<any> = this.logic.getRecommendations();

      return merge(policyAboutEmailsSms$, policyAboutAnonymity$, recommendations$);
    }
    else if (nextStep === 4){
      return this.logic.addNewIssue();
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

  setCanSubmit(){
    let canSubmitFlag;
    if (this.isVerificationNeeded()){
      canSubmitFlag = new PermissionFlag(false, this.verificationNeededTxt);
    }
    else if (!this.termsAcceptedClicked){
      canSubmitFlag = new PermissionFlag(false, this.termsNotAcceptedTxt);
    }
    else{
      canSubmitFlag = new PermissionFlag(true, '');
    }
    this.ngZone.run(() => this.canSubmit = canSubmitFlag);
  }

  isVerificationNeeded(): boolean {
    return (!this.unverifiedEmailAllowed && !this.logic.isEmailVerified()) ||
        (!this.unverifiedSmsAllowed && !this.logic.isPhoneVerified());
  }

  areDetailsMissing(): boolean {
    return this.logic.areRequiredDetailsMissing(!this.unverifiedEmailAllowed, !this.unverifiedSmsAllowed);
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
    let profileElement: ProfileElement;
    if (!this.unverifiedEmailAllowed && !this.logic.isEmailVerified()){
      profileElement = this.logic.getEmailProfileElement();
    }
    else if (!this.unverifiedSmsAllowed && !this.logic.isPhoneVerified()){
      profileElement = this.logic.getPhoneProfileElement();
    }
    else {
      return;
    }

    VerifyModalComponent.present(
        this.modalController,
        profileElement,
        (result: boolean) => {
          if (result) {
            this.logic.setIsUserActive().subscribe({
              complete: () => this.setCanSubmit()
            });
          }
        });
  }

  navigateToProfileScreen(){
    this.router.navigate(['/profile']);
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
    this.localTranslateService.pairs.push({key: 'verification-needed', callback: (res: string) => this.verificationNeededTxt = res});
    this.localTranslateService.pairs.push({key: 'anonymous-not-allowed', callback: (res: string) => this.anonymousNotAllowedTxt = res});
    this.localTranslateService.pairs.push({key: 'terms-not-accepted', callback: (res: string) => this.termsNotAcceptedTxt = res});
    this.localTranslateService.pairs.push({key: 'details-missing', callback: (res: string) => this.missingDetailsTxt = res});
    this.localTranslateService.pairs.push({key: 'go', callback: (res: string) => this.goTxt = res});
    this.localTranslateService.pairs.push({key: this.logic.request.subService.translationKey,
      callback: (res: string) => this.logic.request.subService.name = res});
  }
}
