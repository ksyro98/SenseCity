import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdministrativeFormSubmitComponent = class AdministrativeFormSubmitComponent {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        this.submit = 'Υποβολή';
        this.beforeNameText = 'Ο ';
        this.submitAdminRequest1 = 'με ΑΔΤ';
        this.submitAdminRequest2 = 'κάνει αίτηση στο';
        this.submitAdminRequest3 = 'Δήμο Πατρών';
        this.submitAdminRequest4 = 'για την έκδωση πιστοποιητικού';
        this.submitAdminRequest5 = 'Dolor assumenda';
        this.submitAdminRequest6 = 'στις';
        this.submitAdminRequest7 = '17 Δεκεμβρίου 2020';
        this.submitAdminRequest8 = 'Το πιστοπιητικό θα σταλθεί στο ηλεκτρονικό ταχυδρομίο με διεύθυνση';
        this.nameOfPhotoValue = 'Ονομα φωτογραφιας';
        this.nameOfFileValue = 'Ονομα αρχειου';
        this.acceptTerms1 = 'Αποδέχομαι τους ';
        this.acceptTerms2 = 'όρους χρήσης';
        this.acceptTerms3 = ' του SenseCity.';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'submit', callback: (res) => this.submit = res });
        this.localTranslateService.pairs.push({ key: 'submit', callback: (res) => this.submit = res });
        this.localTranslateService.pairs.push({ key: 'before-name-text', callback: (res) => this.beforeNameText = res });
        this.localTranslateService.pairs.push({ key: 'submit-admin-request-1', callback: (res) => this.submitAdminRequest1 = res });
        this.localTranslateService.pairs.push({ key: 'submit-admin-request-2', callback: (res) => this.submitAdminRequest2 = res });
        this.localTranslateService.pairs.push({ key: 'submit-admin-request-3', callback: (res) => this.submitAdminRequest3 = res });
        this.localTranslateService.pairs.push({ key: 'submit-admin-request-4', callback: (res) => this.submitAdminRequest4 = res });
        this.localTranslateService.pairs.push({ key: 'submit-admin-request-5', callback: (res) => this.submitAdminRequest5 = res });
        this.localTranslateService.pairs.push({ key: 'submit-admin-request-6', callback: (res) => this.submitAdminRequest6 = res });
        this.localTranslateService.pairs.push({ key: 'submit-admin-request-7', callback: (res) => this.submitAdminRequest7 = res });
        this.localTranslateService.pairs.push({ key: 'submit-admin-request-8', callback: (res) => this.submitAdminRequest8 = res });
        this.localTranslateService.pairs.push({ key: '_name-of-photo-value', callback: (res) => this.nameOfPhotoValue = res });
        this.localTranslateService.pairs.push({ key: '_name-of-file-value', callback: (res) => this.nameOfFileValue = res });
        this.localTranslateService.pairs.push({ key: 'accept-terms-1', callback: (res) => this.acceptTerms1 = res });
        this.localTranslateService.pairs.push({ key: 'accept-terms-2', callback: (res) => this.acceptTerms2 = res });
        this.localTranslateService.pairs.push({ key: 'accept-terms-3', callback: (res) => this.acceptTerms3 = res });
    }
};
AdministrativeFormSubmitComponent = __decorate([
    Component({
        selector: 'app-administrative-form-submit',
        templateUrl: './administrative-form-submit.component.html',
        styleUrls: ['./administrative-form-submit.component.scss'],
    })
], AdministrativeFormSubmitComponent);
export { AdministrativeFormSubmitComponent };
//# sourceMappingURL=administrative-form-submit.component.js.map