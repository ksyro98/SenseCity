import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdministrativeFormComponent = class AdministrativeFormComponent {
    constructor(router, localTranslateService) {
        this.router = router;
        this.localTranslateService = localTranslateService;
        this.currentStep = 0;
        this.newRequest = 'Νέα Αίτημα';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
        this.router.queryParams.subscribe(params => {
            const service = {
                id: parseInt(params.service_id, 10),
                name: params.service_name,
                icon: '',
                translationKey: params.service_translation_key
            };
        });
    }
    setCurrentStep(currentStep) {
        this.currentStep = currentStep;
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'new-request', callback: (res) => this.newRequest = res });
    }
};
AdministrativeFormComponent = __decorate([
    Component({
        selector: 'app-administrative-form',
        templateUrl: './administrative-form.component.html',
        styleUrls: ['./administrative-form.component.scss'],
    })
], AdministrativeFormComponent);
export { AdministrativeFormComponent };
//# sourceMappingURL=administrative-form.component.js.map