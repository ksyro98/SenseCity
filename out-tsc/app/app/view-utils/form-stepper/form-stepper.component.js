import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Keyboard } = Plugins;
let FormStepperComponent = class FormStepperComponent {
    constructor(location, alertService, cdr) {
        this.location = location;
        this.alertService = alertService;
        this.cdr = cdr;
        this.currentStepEvent = new EventEmitter();
        this.keyboardShown = false;
        this.currentStep = 0;
    }
    ngOnInit() {
        this.rangeArray = Array(this.steps).fill(0).map((x, i) => i);
        Keyboard.addListener('keyboardWillShow', (_) => {
            this.keyboardShown = true;
            console.log(this.keyboardShown);
            this.cdr.detectChanges();
        });
        Keyboard.addListener('keyboardWillHide', () => {
            this.keyboardShown = false;
            console.log(this.keyboardShown);
            this.cdr.detectChanges();
        });
    }
    closeForm() {
        this.location.back();
    }
    nextStep() {
        if (!this.canProceed) {
            return;
        }
        if (this.currentStep === this.steps - 1) {
            this.alertService.showAlert({
                head: 'Ολοκλήρωση Αίτησης',
                body: 'Είσαι σίγουρος ότι θέλεις να στείλεις αυτή την αίτηση;',
            }, () => this.location.back());
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