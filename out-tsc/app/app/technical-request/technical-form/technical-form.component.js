import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RequestedService } from '../../entities/RequestedService';
let TechnicalFormComponent = class TechnicalFormComponent {
    constructor(router, localTranslateService) {
        this.router = router;
        this.localTranslateService = localTranslateService;
        // public service: RequestedService;
        this.canProceed = true;
        this.currentStep = 0;
        this.newRequest = 'Νέα Αίτηση';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
        this.router.queryParams.subscribe(params => {
            const service = {
                id: parseInt(params.service_id, 10),
                name: params.service_name,
                icon: params.service_iconm,
                translationKey: params.service_translation_key
            };
            const category = RequestedService.getCategoryForService(service.id)[0];
            this.request = {
                service,
                category,
                comments: '',
                image: '',
                location: '',
                named: false
            };
        });
    }
    setCanProceed(canProceed) {
        this.canProceed = canProceed;
    }
    setCurrentStep(currentStep) {
        this.currentStep = currentStep;
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'new-request', callback: (res) => this.newRequest = res });
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