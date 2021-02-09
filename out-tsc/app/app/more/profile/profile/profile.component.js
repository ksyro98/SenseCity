import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { CitiesModalComponent } from '../../../view-utils/cities-modal/cities-modal.component';
import { PROFILE_ELEMENTS } from '../../../constants/ProfileElements';
let ProfileComponent = class ProfileComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.focus = false;
        this.city = 'Πάτρα';
        this.elements = PROFILE_ELEMENTS;
    }
    ngOnInit() { }
    presentCitiesModal() {
        return __awaiter(this, void 0, void 0, function* () {
            CitiesModalComponent.present(this.modalController, (city) => this.city = city.name);
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