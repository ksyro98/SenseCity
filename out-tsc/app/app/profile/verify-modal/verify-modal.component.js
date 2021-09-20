var VerifyModalComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component, HostListener, Input } from '@angular/core';
import { ProfileElement } from '../../entities/ProfileElement';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;
let VerifyModalComponent = VerifyModalComponent_1 = class VerifyModalComponent {
    constructor(logic, modalController, localTranslateService) {
        this.logic = logic;
        this.modalController = modalController;
        this.localTranslateService = localTranslateService;
        this.isVerifyEnabled = true;
        this.isVerifyLoading = false;
        this.verification = '';
        this.verificationDesc1 = '';
        this.verificationDesc2 = '';
        this.verificationDesc3 = '';
        this.verify = '';
        this.emptyDigitsError = '';
        this.wrongCodeError = '';
        this.successfulVerification = '';
        this.setTranslationPairs();
    }
    static present(modalController, usersElement, onDismiss) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield modalController.create({
                component: VerifyModalComponent_1,
                cssClass: 'verify-modal-class',
                componentProps: {
                    profileElement: usersElement,
                }
            });
            modal.onDidDismiss()
                .then((data) => {
                if (data.data !== null) {
                    onDismiss(data.data);
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    onDigitTyped(ev) {
        const value = ev.target.firstChild.value;
        // when backspace is pressed, the value isn't updated (probably if(value)) isn't "entered"
        console.log(value);
        if (value) {
            if (value.length > 1) {
                // this.firstDigit = +(this.firstDigit.toString().substring(0, 1));
                ev.target.firstChild.value = value.toString().split('')[value.length - 1];
            }
            if (ev.target.parentElement.parentElement.nextElementSibling) {
                // ion-input --> div --> col --> col --> div --> ion-input --> input
                ev.target.parentElement.parentElement.nextElementSibling.firstChild.firstChild.firstChild.focus();
            }
        }
        this.updateDigitValues(ev.target.firstChild.value, ev.target.id);
        if (this.firstDigit && this.secondDigit && this.thirdDigit && this.fourthDigit) {
            this.startVerification();
        }
    }
    startVerification() {
        if (this.firstDigit && this.secondDigit && this.thirdDigit && this.fourthDigit) {
            const code = this.firstDigit + this.secondDigit + this.thirdDigit + this.fourthDigit;
            this.activate(code);
        }
        else {
            Toast.show({ text: this.emptyDigitsError });
            this.stopActivation();
        }
    }
    activate(code) {
        this.startLoading();
        this.verificationSubscription = this.logic.activateUser(ProfileElement.EMAIL_KEY, code)
            .subscribe({
            next: value => {
                console.log(value);
                if (value === null) {
                    console.log('error');
                    Toast.show({ text: this.wrongCodeError, duration: 'long' });
                }
                else if (value.ok === 1) {
                    console.log('success');
                    Toast.show({ text: this.successfulVerification });
                    this.modalController.dismiss(true);
                }
                this.stopLoading();
            },
            error: error => {
                console.log(error);
            }
        });
    }
    stopActivation() {
        this.verificationSubscription.unsubscribe();
        this.stopLoading();
    }
    enableButton(enable) {
        this.isVerifyEnabled = enable;
    }
    startLoading() {
        this.isVerifyLoading = true;
        this.enableButton(false);
    }
    stopLoading() {
        this.isVerifyLoading = false;
        this.enableButton(true);
    }
    updateDigitValues(value, which) {
        switch (which) {
            case 'firstDigitInput':
                this.firstDigit = value;
                break;
            case 'secondDigitInput':
                this.secondDigit = value;
                break;
            case 'thirdDigitInput':
                this.thirdDigit = value;
                break;
            case 'fourthDigitInput':
                this.fourthDigit = value;
                break;
        }
    }
    overrideHardwareBackAction($event) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(false);
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'verification', callback: (res) => this.verification = res });
        this.localTranslateService.pairs.push({ key: 'verification-description-1', callback: (res) => this.verificationDesc1 = res });
        this.localTranslateService.pairs.push({ key: 'verification-description-2', callback: (res) => this.verificationDesc2 = res });
        this.localTranslateService.pairs.push({ key: 'verification-description-3', callback: (res) => this.verificationDesc3 = res });
        this.localTranslateService.pairs.push({ key: 'verify', callback: (res) => this.verify = res });
        this.localTranslateService.pairs.push({ key: 'empty-digits-error', callback: (res) => this.emptyDigitsError = res });
        this.localTranslateService.pairs.push({ key: 'wrong-code-error', callback: (res) => this.wrongCodeError = res });
        this.localTranslateService.pairs.push({ key: 'successful-verification', callback: (res) => this.successfulVerification = res });
    }
};
__decorate([
    Input()
], VerifyModalComponent.prototype, "profileElement", void 0);
__decorate([
    HostListener('document:ionBackButton', ['$event'])
], VerifyModalComponent.prototype, "overrideHardwareBackAction", null);
VerifyModalComponent = VerifyModalComponent_1 = __decorate([
    Component({
        selector: 'app-verify-modal',
        templateUrl: './verify-modal.component.html',
        styleUrls: ['./verify-modal.component.scss'],
    })
], VerifyModalComponent);
export { VerifyModalComponent };
//# sourceMappingURL=verify-modal.component.js.map