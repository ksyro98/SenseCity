import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { CitiesModalComponent } from '../../view-utils/cities-modal/cities-modal.component';
import { CITIES } from '../../constants/Cities';
let TechnicalFormMapComponent = class TechnicalFormMapComponent {
    constructor(modalController, localTranslateService) {
        this.modalController = modalController;
        this.localTranslateService = localTranslateService;
        this.city = CITIES[4];
        this.location = 'Τοποθεσία';
        this.changeCity = 'Αλλαγή πόλης';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    presentCitiesModal() {
        return __awaiter(this, void 0, void 0, function* () {
            CitiesModalComponent.present(this.modalController, (city) => this.city = city);
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'location', callback: (res) => this.location = res });
        this.localTranslateService.pairs.push({ key: 'change-city', callback: (res) => this.changeCity = res });
    }
};
TechnicalFormMapComponent = __decorate([
    Component({
        selector: 'app-technical-form-map',
        templateUrl: './technical-form-map.component.html',
        styleUrls: ['./technical-form-map.component.scss'],
    })
], TechnicalFormMapComponent);
export { TechnicalFormMapComponent };
//# sourceMappingURL=technical-form-map.component.js.map