import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PROFILE_ELEMENTS } from '../../constants/ProfileElements';
let AdministrativeFormBasicInfoComponent = class AdministrativeFormBasicInfoComponent {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        this.basicInformation = 'Βασικές πληροφορίες';
        this.saveChanges = 'Αποθήκευση αλλαγών στο προφίλ μου.';
        this.elements = PROFILE_ELEMENTS;
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    setTranslationPairs() {
        this.elements.forEach((element) => {
            this.localTranslateService.pairs.push({ key: element.key, callback: (res) => element.label = res });
        });
        this.localTranslateService.pairs.push({ key: 'basic-information', callback: (res) => this.basicInformation = res });
        this.localTranslateService.pairs.push({ key: 'save-changes', callback: (res) => this.saveChanges = res });
    }
};
AdministrativeFormBasicInfoComponent = __decorate([
    Component({
        selector: 'app-administrative-form-basic-info',
        templateUrl: './administrative-form-basic-info.component.html',
        styleUrls: ['./administrative-form-basic-info.component.scss'],
    })
], AdministrativeFormBasicInfoComponent);
export { AdministrativeFormBasicInfoComponent };
//# sourceMappingURL=administrative-form-basic-info.component.js.map