import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RequestedService } from '../../../entities/RequestedService';
let TechnicalFormComponent = class TechnicalFormComponent {
    constructor(router) {
        this.router = router;
        // public service: RequestedService;
        this.canProceed = true;
        this.currentStep = 0;
    }
    ngOnInit() {
        this.router.queryParams.subscribe(params => {
            const service = {
                id: parseInt(params.service_id, 10),
                name: params.service_name,
                icon: params.service_icon
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