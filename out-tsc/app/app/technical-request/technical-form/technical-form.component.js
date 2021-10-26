import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Service } from '../../entities/Service';
import { TechnicalRequest } from '../../entities/TechnicalRequest';
import { TechnicalRequestLogicService } from '../technical-request-logic/technical-request-logic.service';
import { RecommendationsModalComponent } from '../recommendations/recommendations-modal/recommendations-modal.component';
import { Observable, merge, Subscriber } from 'rxjs';
import { VerifyModalComponent } from '../../profile/verify-modal/verify-modal.component';
import { Plugins } from '@capacitor/core';
import { Recommendation } from '../../entities/Recommendation';
const { Toast } = Plugins;
let TechnicalFormComponent = class TechnicalFormComponent {
    constructor(router, localTranslateService, logic, alertService, modalController, location) {
        this.router = router;
        this.localTranslateService = localTranslateService;
        this.logic = logic;
        this.alertService = alertService;
        this.modalController = modalController;
        this.location = location;
        this.canProceed = true;
        this.currentStep = 0;
        this.loading = false;
        this.anonymousAllowed = false;
        this.unverifiedEmailAllowed = true;
        this.unverifiedSmsAllowed = true;
        this.newRequestTxt = 'Νέα Αίτηση';
        this.verifyTxt = 'Επιβεβαίωση';
        this.submittedSuccessfullyTxt = 'Το αίτημά σας υποβλήθηκε με επιτυχία.';
        this.wentWrongTxt = 'Ωχ, κάτι δεν πήγε καλά. Παρακαλώ δοκιμάστε ξανά.';
        this.warningTxt = 'Προσοχή!';
        this.sendNamedTxt = 'Πρέπει να στείλετε μια επώνυμη αναφορά.';
        this.updatedSuccessfullyTxt = 'Το ζήτημα ενημερώθηκε με επιτυχία.';
        this.needToVerify1Txt = 'Πρέπει να επιβεβαιώσετε το ';
        this.needToVerify2Txt = ' και το ';
        this.needToVerify3Txt = ' για να υποβάλει αυτό το αίτημα.';
        this.emailTxt = 'email';
        this.mobilePhoneTxt = 'τηλέφωνο';
    }
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
            this.logic.request = new TechnicalRequest(selectedService, defaultSubService, '', '', { type: 'point', coordinates: [] }, false);
            this.setTranslationPairs();
        });
    }
    setCanProceed(canProceed) {
        this.canProceed = canProceed;
    }
    goToNextStep(nextStep) {
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
    manageNexStepMapResponse(response) {
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
                if (response.value.description === 'ok') {
                    Toast.show({ text: this.submittedSuccessfullyTxt });
                    this.location.back();
                }
                else {
                    Toast.show({ text: this.wentWrongTxt });
                }
                break;
        }
    }
    onCommentsChange(comments) {
        this.logic.request.comments = comments;
    }
    onLocationChange(latlng) {
        this.logic.request.location = { type: 'Point', coordinates: latlng };
    }
    doActionBeforeStepChange(nextStep) {
        if (nextStep === 3) {
            const policyAboutEmailsSms$ = this.logic.getPolicyAboutEmailsSms();
            const policyAboutAnonymity$ = this.logic.getPolicyAboutAnonymity();
            const recommendations$ = this.logic.getRecommendations();
            return merge(policyAboutEmailsSms$, policyAboutAnonymity$, recommendations$);
        }
        else if (nextStep === 4) {
            if (!this.anonymousAllowed && !this.namedClicked) {
                this.alertService.show({
                    head: this.warningTxt,
                    body: this.sendNamedTxt
                }, () => { }, true, true);
                return new Observable(subscriber => subscriber.complete());
            }
            else {
                return this.logic.addNewIssue();
            }
        }
        else {
            return new Observable(subscriber => subscriber.complete());
        }
    }
    showRecommendations(recommendations) {
        RecommendationsModalComponent.present(this.modalController, recommendations, (recommendation) => {
            if (recommendation) {
                Toast.show({ text: this.updatedSuccessfullyTxt });
                this.location.back();
            }
            else if (recommendation === null) {
                Toast.show({ text: this.wentWrongTxt });
            }
        });
    }
    shouldShowVerificationSnackBar() {
        return (!this.unverifiedEmailAllowed && !this.logic.isEmailVerified()) ||
            (!this.unverifiedSmsAllowed && !this.logic.isPhoneVerified());
    }
    getVerificationSnackBarText() {
        let text = this.needToVerify1Txt;
        const emailNeeded = !this.unverifiedEmailAllowed && !this.logic.isEmailVerified();
        const phoneNeeded = !this.unverifiedSmsAllowed && !this.logic.isPhoneVerified();
        text += emailNeeded ? this.emailTxt : '';
        text += (emailNeeded && phoneNeeded) ? this.needToVerify2Txt : '';
        text += phoneNeeded ? this.mobilePhoneTxt : '';
        return text + this.needToVerify3Txt;
    }
    presentVerificationModal() {
        VerifyModalComponent.present(this.modalController, this.logic.getEmailProfileElement(), (result) => {
            if (result) {
                this.logic.setIsUserActive();
            }
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'new-request', callback: (res) => this.newRequestTxt = res });
        this.localTranslateService.pairs.push({ key: 'verify', callback: (res) => this.verifyTxt = res });
        this.localTranslateService.pairs.push({ key: 'submitted-successfully', callback: (res) => this.submittedSuccessfullyTxt = res });
        this.localTranslateService.pairs.push({ key: 'went-wrong', callback: (res) => this.wentWrongTxt = res });
        this.localTranslateService.pairs.push({ key: 'warning', callback: (res) => this.warningTxt = res });
        this.localTranslateService.pairs.push({ key: 'send-named', callback: (res) => this.sendNamedTxt = res });
        this.localTranslateService.pairs.push({ key: 'updated-successfully', callback: (res) => this.updatedSuccessfullyTxt = res });
        this.localTranslateService.pairs.push({ key: 'need-to-verify-1', callback: (res) => this.needToVerify1Txt = res });
        this.localTranslateService.pairs.push({ key: 'need-to-verify-2', callback: (res) => this.needToVerify2Txt = res });
        this.localTranslateService.pairs.push({ key: 'need-to-verify-3', callback: (res) => this.needToVerify3Txt = res });
        this.localTranslateService.pairs.push({ key: 'email-lc', callback: (res) => this.emailTxt = res });
        this.localTranslateService.pairs.push({ key: 'phone-number-lc', callback: (res) => this.mobilePhoneTxt = res });
        this.localTranslateService.pairs.push({ key: this.logic.request.subService.translationKey, callback: (res) => this.logic.request.subService.name = res });
    }
};
TechnicalFormComponent = __decorate([
    Component({
        selector: 'app-technical-form',
        templateUrl: './technical-form.component.html',
        styleUrls: ['./technical-form.component.scss'],
    })
], TechnicalFormComponent);
export { TechnicalFormComponent };
//# sourceMappingURL=technical-form.component.js.map