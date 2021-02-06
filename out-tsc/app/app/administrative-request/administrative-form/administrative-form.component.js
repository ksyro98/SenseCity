import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdministrativeFormComponent = class AdministrativeFormComponent {
    constructor(router) {
        this.router = router;
        this.currentStep = 2;
    }
    ngOnInit() {
        this.router.queryParams.subscribe(params => {
            const service = {
                id: parseInt(params.service_id, 10),
                name: params.service_name,
                icon: ''
            };
        });
    }
    setCurrentStep(currentStep) {
        this.currentStep = currentStep;
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