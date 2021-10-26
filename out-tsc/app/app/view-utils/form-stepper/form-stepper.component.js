var FormStepperComponent_1;
import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Keyboard } = Plugins;
let FormStepperComponent = FormStepperComponent_1 = class FormStepperComponent {
    constructor(location, alertService, cdr, localTranslateService) {
        this.location = location;
        this.alertService = alertService;
        this.cdr = cdr;
        this.localTranslateService = localTranslateService;
        this.currentStepEvent = new EventEmitter();
        this.submitEvent = new EventEmitter();
        this.keyboardShown = false;
        this.completeRequestHead = 'Ολοκλήρωση Αίτησης';
        this.completeRequestBody = 'Είσαι σίγουρος ότι θέλεις να στείλεις αυτή την αίτηση;';
        this.currentStep = 0;
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
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
        if (!this.canButtonBeClicked(FormStepperComponent_1.CLOSE)) {
            return;
        }
        this.currentStepEvent.emit(0);
        this.location.back();
    }
    previousStep() {
        if (!this.canButtonBeClicked(FormStepperComponent_1.PREVIOUS)) {
            return;
        }
        this.currentStepEvent.emit(this.currentStep - 1);
    }
    nextStep() {
        if (!this.canButtonBeClicked(FormStepperComponent_1.NEXT)) {
            return;
        }
        if (this.currentStep === this.steps - 1) {
            this.alertService.show({
                head: this.completeRequestHead,
                body: this.completeRequestBody,
            }, () => this.submitEvent.emit());
            return;
        }
        this.currentStepEvent.emit(this.currentStep + 1);
    }
    canButtonBeClicked(which) {
        switch (which) {
            case FormStepperComponent_1.CLOSE:
                return !this.loading;
            case FormStepperComponent_1.PREVIOUS:
                return this.canProceed && (this.currentStep !== 0) && !this.loading;
            case FormStepperComponent_1.NEXT:
                return this.canProceed && !this.loading;
            default:
                return false;
        }
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'complete-request-head', callback: (res) => this.completeRequestHead = res });
        this.localTranslateService.pairs.push({ key: 'complete-request-body', callback: (res) => this.completeRequestBody = res });
    }
};
FormStepperComponent.CLOSE = -1;
FormStepperComponent.PREVIOUS = 0;
FormStepperComponent.NEXT = 1;
__decorate([
    Input()
], FormStepperComponent.prototype, "steps", void 0);
__decorate([
    Input()
], FormStepperComponent.prototype, "canProceed", void 0);
__decorate([
    Input()
], FormStepperComponent.prototype, "currentStep", void 0);
__decorate([
    Input()
], FormStepperComponent.prototype, "loading", void 0);
__decorate([
    Output()
], FormStepperComponent.prototype, "currentStepEvent", void 0);
__decorate([
    Output()
], FormStepperComponent.prototype, "submitEvent", void 0);
FormStepperComponent = FormStepperComponent_1 = __decorate([
    Component({
        selector: 'app-form-stepper',
        templateUrl: './form-stepper.component.html',
        styleUrls: ['./form-stepper.component.scss'],
    })
], FormStepperComponent);
export { FormStepperComponent };
//# sourceMappingURL=form-stepper.component.js.map