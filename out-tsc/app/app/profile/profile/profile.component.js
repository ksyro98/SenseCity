import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { CitiesModalComponent } from '../../view-utils/cities-modal/cities-modal.component';
import { PROFILE_ELEMENTS } from '../../constants/ProfileElements';
import { LocalTranslateService } from '../../view-utils/local-translate-service/local-translate.service';
import { CITIES } from '../../constants/Cities';
let ProfileComponent = class ProfileComponent {
    constructor(modalController, translate, localTranslateService) {
        this.modalController = modalController;
        this.translate = translate;
        this.localTranslateService = localTranslateService;
        this.focus = false;
        // city = 'Πάτρα';
        this.language = LocalTranslateService.getDefaultLanguage();
        this.city = CITIES[4];
        this.pairs = [
            { key: 'profile', callback: (res) => this.profile = res },
            { key: 'accept-terms-1', callback: (res) => this.acceptTerms1 = res },
            { key: 'accept-terms-2', callback: (res) => this.acceptTerms2 = res },
            { key: 'accept-terms-3', callback: (res) => this.acceptTerms3 = res },
            { key: this.city.cityKey, callback: (res) => this.city.name = res }
        ];
        this.elements = PROFILE_ELEMENTS;
        this.elements.forEach((element) => {
            this.pairs.push({ key: element.translationKey, callback: (res) => element.label = res });
        });
        this.pairs.push({ key: 'city', callback: (res) => this.cityTitle = res });
        this.pairs.push({ key: 'language', callback: (res) => this.languageTitle = res });
        this.localTranslateService.pairs = this.localTranslateService.pairs.concat(this.pairs);
        this.localTranslateService.translate = translate;
        this.language = this.localTranslateService.language ? this.localTranslateService.language : LocalTranslateService.getDefaultLanguage();
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