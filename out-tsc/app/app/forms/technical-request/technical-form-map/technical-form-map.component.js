import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { CitiesModalComponent } from '../../../view-utils/cities-modal/cities-modal.component';
import { CITIES } from '../../../constants/Cities';
let TechnicalFormMapComponent = class TechnicalFormMapComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.city = CITIES[4];
    }
    ngOnInit() { }
    presentCitiesModal() {
        return __awaiter(this, void 0, void 0, function* () {
            CitiesModalComponent.present(this.modalController, (city) => this.city = city);
        });
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