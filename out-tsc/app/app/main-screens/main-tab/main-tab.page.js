import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolbarPopoverComponent } from '../../view-utils/toolbar-popover/toolbar-popover.component';
import { CitiesModalComponent } from '../../view-utils/cities-modal/cities-modal.component';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;
let MainTabPage = class MainTabPage {
    constructor(popoverController, modalController, alertService, firstTimeStorageService) {
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.alertService = alertService;
        this.firstTimeStorageService = firstTimeStorageService;
        this.typeOfService = 0; // 0 --> technical, 1 --> administrative
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const isFirstTime = yield this.firstTimeStorageService.isFirstTime();
            if (isFirstTime) {
                this.alertService.showAlert({
                    head: 'Αλλαγη πόλης',
                    body: 'Η επιλγμένη πόλη είναι η Πάτρα. Μπορείς να την αλλάξεις πατώντας στις 3 τελειες, πάνω δεξιά.'
                }, () => __awaiter(this, void 0, void 0, function* () { return this.firstTimeStorageService.setFirstTime(false); }));
            }
        });
    }
    servicesSegmentChanged(event) {
        this.typeOfService = event.detail.value;
        console.log(this.typeOfService);
    }
    onSearch(event) {
        this.query = event.target.value.toLowerCase();
    }
    presentPopover(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ToolbarPopoverComponent.present(this.popoverController, ev, ['Αλλαγή πόλης'], (data) => {
                if (data !== undefined) {
                    CitiesModalComponent.present(this.modalController, (city) => __awaiter(this, void 0, void 0, function* () { return this.changeCity(city); }));
                }
            });
        });
    }
    changeCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Toast.show({
                text: 'Η πολη αλλαξε σε ' + city.name
            });
        });
    }
};
MainTabPage = __decorate([
    Component({
        selector: 'app-main-tab',
        templateUrl: './main-tab.page.html',
        styleUrls: ['./main-tab.page.scss'],
    })
], MainTabPage);
export { MainTabPage };
//# sourceMappingURL=main-tab.page.js.map