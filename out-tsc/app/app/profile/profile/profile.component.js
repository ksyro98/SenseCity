import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { CitiesModalComponent } from '../../view-utils/cities-modal/cities-modal.component';
import { ProfileElement } from '../../entities/ProfileElement';
import { LocalTranslateService } from '../../view-utils/local-translate-service/local-translate.service';
import { CITIES } from '../../constants/Cities';
import { VerifyModalComponent } from '../verify-modal/verify-modal.component';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;
let ProfileComponent = class ProfileComponent {
    constructor(modalController, translate, localTranslateService, logic) {
        this.modalController = modalController;
        this.translate = translate;
        this.localTranslateService = localTranslateService;
        this.logic = logic;
        this.focus = false;
        this.language = LocalTranslateService.getDefaultLanguage();
        this.city = CITIES[4];
        this.emailKey = ProfileElement.EMAIL_KEY;
        this.phoneKey = ProfileElement.PHONE_KEY;
        this.pairs = [
            { key: 'profile', callback: (res) => this.profile = res },
            { key: 'accept-terms-1', callback: (res) => this.acceptTerms1 = res },
            { key: 'accept-terms-2', callback: (res) => this.acceptTerms2 = res },
            { key: 'accept-terms-3', callback: (res) => this.acceptTerms3 = res },
            { key: 'not-verified-1', callback: (res) => this.notVerified1 = res },
            { key: 'not-verified-2', callback: (res) => this.notVerified2 = res },
            { key: 'verify', callback: (res) => this.verify = res },
            { key: 'unexpected-error', callback: (res) => this.unexpectedError = res },
            { key: this.city.cityKey, callback: (res) => this.city.name = res }
        ];
        logic.waitForUser().then((user) => {
            this.elements = ProfileElement.getProfileElementsFromUser(logic.user);
            this.elements.forEach((element) => {
                this.pairs.push({ key: element.key, callback: (res) => element.label = res });
            });
            this.pairs.push({ key: 'city', callback: (res) => this.cityTitle = res });
            this.pairs.push({ key: 'language', callback: (res) => this.languageTitle = res });
            this.localTranslateService.pairs = this.localTranslateService.pairs.concat(this.pairs);
            this.localTranslateService.translate = translate;
            this.language = this.localTranslateService.language
                ? this.localTranslateService.language
                : LocalTranslateService.getDefaultLanguage();
            this.isActive$ = logic.isUserActive();
        });
    }
    ngOnInit() {
        this.localTranslateService.initTranslate();
        this.language = this.localTranslateService.language;
    }
    changeLanguage() {
        this.localTranslateService.changeLanguage(this.language);
    }
    presentCitiesModal() {
        return __awaiter(this, void 0, void 0, function* () {
            CitiesModalComponent.present(this.modalController, (city) => this.city = city);
        });
    }
    onFocusLost(key, value) {
        this.logic.setUserValue(key, value);
        if (key === ProfileElement.EMAIL_KEY || key === ProfileElement.PHONE_KEY) {
            this.isActive$ = this.logic.isUserActive();
        }
    }
    presentVerifyModal(element) {
        this.logic.sendActivationCode(element.key).subscribe({
            next: value => console.log(value),
            error: error => {
                console.log(error);
                Toast.show({ text: this.unexpectedError });
            }
        });
        VerifyModalComponent.present(this.modalController, element, (result) => {
            // TODO this doesn't work
            if (result) {
                this.isActive$ = this.logic.isUserActive();
            }
        });
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss'],
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map