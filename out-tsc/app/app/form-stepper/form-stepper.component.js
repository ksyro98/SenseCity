import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let FormStepperComponent = class FormStepperComponent {
    constructor(location) {
        this.location = location;
        this.currentStepEvent = new EventEmitter();
        this.currentStep = 0;
    }
    ngOnInit() {
        this.rangeArray = Array(this.steps).fill(0).map((x, i) => i);
    }
    closeForm() {
        this.location.back();
    }
    nextStep() {
        if ((!this.canProceed) || (this.currentStep === this.steps - 1)) {
            return;
        }
        this.currentStep++;
        this.currentStepEvent.emit(this.currentStep);
    }
    previousStep() {
        if ((!this.canProceed) || (this.currentStep === 0)) {
            return;
        }
        this.currentStep--;
        this.currentStepEvent.emit(this.currentStep);
    }
};
__decorate([
    Input()
], FormStepperComponent.prototype, "steps", void 0);
__decorate([
    Input()
], FormStepperComponent.prototype, "canProceed", void 0);
__decorate([
    Output()
], FormStepperComponent.prototype, "currentStepEvent", void 0);
FormStepperComponent = __decorate([
    Component({
        selector: 'app-form-stepper',
        templateUrl: './form-stepper.component.html',
        styleUrls: ['./form-stepper.component.scss'],
    })
], FormStepperComponent);
export { FormStepperComponent };
//# sourceMappingURL=form-stepper.component.js.map