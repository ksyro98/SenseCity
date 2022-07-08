import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Service } from '../../entities/Service';
import { TechnicalRequest } from '../../entities/TechnicalRequest';
import { TechnicalRequestLogicService } from '../technical-request-logic/technical-request-logic.service';
import { RecommendationsModalComponent } from '../recommendations/recommendations-modal/recommendations-modal.component';
import { Observable, merge, Subscriber } from 'rxjs';
import { VerifyModalComponent } from '../../profile/verify-modal/verify-modal.component';
import { Plugins } from '@capacitor/core';
import { PermissionFlag } from '../../entities/utils/PermissionFlag';
const { Toast } = Plugins;
let TechnicalFormComponent = class TechnicalFormComponent {
    constructor(activatedRoute, router, localTranslateService, logic, modalController, location, ngZone) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localTranslateService = localTranslateService;
        this.logic = logic;
        this.modalController = modalController;
        this.location = location;
        this.ngZone = ngZone;
        this.canProceed = new PermissionFlag(true, '');
        this.canSubmit = new PermissionFlag(true, '');
        this.currentStep = 0;
        this.loading = false;
        this.anonymousAllowed = false;
        this.unverifiedEmailAllowed = true;
        this.unverifiedSmsAllowed = true;
        this.termsAcceptedClicked = true;
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
        this.missingDetailsTxt = 'Ορισμένες από τις απαιτούμενες λεπτομέρειες λείπουν από το προφίλ σας. Παρακαλούμε συμπληρώστε τες για να ' +
            'υποβάλετε αυτό το αίτημα.';
        this.goTxt = 'Πάμε';
        this.emailTxt = 'email';
        this.mobilePhoneTxt = 'τηλέφωνο';
        this.verificationNeededTxt = '';
        this.anonymousNotAllowedTxt = '';
        this.termsNotAcceptedTxt = '';
    }
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
            if (this.logic.request === undefined || this.logic.request.service.id !== selectedService.id) {
                this.logic.request = new TechnicalRequest(selectedService, defaultSubService, '', '', { type: 'point', coordinates: [] }, false);
            }
            this.setTranslationPairs();
            this.logic.setIsUserActive().subscribe({
                complete: () => {
                    this.setCanSubmit();
                }
            });
        });
    }
    onCommentsChange(comments) {
        this.logic.request.comments = comments;
    }
    onLocationChange(latlng) {
        this.logic.request.location = { type: 'Point', coordinates: latlng };
    }
    goToNextStep(nextStep) {
        if (!this.canProceedToNextStep(nextStep)) {
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
    canProceedToNextStep(nextStep) {
        if (nextStep === 3 && this.logic.request.location.coordinates.length === 0) {
            return false;
        }
        return true;
    }
    manageNexStepResponse(response) {
        switch (response.type) {
            case TechnicalRequestLogicService.POLICY_EMAIL_SMS_REQUEST:
                if (response.value.length === 0) {
                    break;
                }
                this.unverifiedEmailAllowed = response.value[0].mandatory_email === 'false';
                this.unverifiedSmsAllowed = response.value[0].mandatory_sms === 'false';
                this.setCanSubmit();
                break;
            case TechnicalRequestLogicService.POLICY_ANONYMITY_REQUEST:
                if (response.value.length === 0) {
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
    doActionBeforeStepChange(nextStep) {
        if (nextStep === 3) {
            const policyAboutEmailsSms$ = this.logic.getPolicyAboutEmailsSms();
            const policyAboutAnonymity$ = this.logic.getPolicyAboutAnonymity();
            const recommendations$ = this.logic.getRecommendations();
            return merge(policyAboutEmailsSms$, policyAboutAnonymity$, recommendations$);
        }
        else if (nextStep === 4) {
            return this.logic.addNewIssue();
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
    setCanSubmit() {
        let canSubmitFlag;
        if (this.isVerificationNeeded()) {
            canSubmitFlag = new PermissionFlag(false, this.verificationNeededTxt);
        }
        else if (!this.termsAcceptedClicked) {
            canSubmitFlag = new PermissionFlag(false, this.termsNotAcceptedTxt);
        }
        else {
            canSubmitFlag = new PermissionFlag(true, '');
        }
        this.ngZone.run(() => this.canSubmit = canSubmitFlag);
    }
    isVerificationNeeded() {
        return (!this.unverifiedEmailAllowed && !this.logic.isEmailVerified()) ||
            (!this.unverifiedSmsAllowed && !this.logic.isPhoneVerified());
    }
    areDetailsMissing() {
        return this.logic.areRequiredDetailsMissing(!this.unverifiedEmailAllowed, !this.unverifiedSmsAllowed);
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
        let profileElement;
        if (!this.unverifiedEmailAllowed && !this.logic.isEmailVerified()) {
            profileElement = this.logic.getEmailProfileElement();
        }
        else if (!this.unverifiedSmsAllowed && !this.logic.isPhoneVerified()) {
            profileElement = this.logic.getPhoneProfileElement();
        }
        else {
            return;
        }
        VerifyModalComponent.present(this.modalController, profileElement, (result) => {
            if (result) {
                this.logic.setIsUserActive().subscribe({
                    complete: () => this.setCanSubmit()
                });
            }
        });
    }
    navigateToProfileScreen() {
        this.router.navigate(['/profile']);
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
        this.localTranslateService.pairs.push({ key: 'verification-needed', callback: (res) => this.verificationNeededTxt = res });
        this.localTranslateService.pairs.push({ key: 'anonymous-not-allowed', callback: (res) => this.anonymousNotAllowedTxt = res });
        this.localTranslateService.pairs.push({ key: 'terms-not-accepted', callback: (res) => this.termsNotAcceptedTxt = res });
        this.localTranslateService.pairs.push({ key: 'details-missing', callback: (res) => this.missingDetailsTxt = res });
        this.localTranslateService.pairs.push({ key: 'go', callback: (res) => this.goTxt = res });
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