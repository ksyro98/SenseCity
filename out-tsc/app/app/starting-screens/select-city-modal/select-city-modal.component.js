var SelectCityModalComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
import { CITIES } from '../../constants/Cities';
let SelectCityModalComponent = SelectCityModalComponent_1 = class SelectCityModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.query = '';
    }
    static present(modalController, onDismiss) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield modalController.create({
                component: SelectCityModalComponent_1,
                cssClass: 'general-modal-class',
            });
            modal.onDidDismiss()
                .then((data) => onDismiss(data));
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.cities = CITIES;
    }
    onSearch(event) {
        this.query = event.target.value.toLowerCase();
    }
    dismissModal(city) {
        this.modalController.dismiss(city);
    }
    overrideHardwareBackAction($event) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('test');
            // await Toast.show({text: 'Διαλεξτε μια πολη για να συνεχισετε.'});
        });
    }
};
__decorate([
    HostListener('document:ionBackButton', ['$event'])
], SelectCityModalComponent.prototype, "overrideHardwareBackAction", null);
SelectCityModalComponent = SelectCityModalComponent_1 = __decorate([
    Component({
        selector: 'app-select-city-modal',
        templateUrl: './select-city-modal.component.html',
        styleUrls: ['./select-city-modal.component.scss'],
    })
], SelectCityModalComponent);
export { SelectCityModalComponent };
//# sourceMappingURL=select-city-modal.component.js.map