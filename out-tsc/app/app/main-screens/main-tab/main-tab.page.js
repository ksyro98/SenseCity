import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolbarPopoverComponent } from '../../view-utils/toolbar-popover/toolbar-popover.component';
import { CitiesModalComponent } from '../../view-utils/cities-modal/cities-modal.component';
import { Plugins } from '@capacitor/core';
import { CITY_POLYGONS } from '../../constants/Cities';
const { Toast } = Plugins;
let MainTabPage = class MainTabPage {
    constructor(popoverController, modalController, alertService, storageCounter, storageState, route, localTranslateService) {
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.alertService = alertService;
        this.storageCounter = storageCounter;
        this.storageState = storageState;
        this.route = route;
        this.localTranslateService = localTranslateService;
        this.typeOfService = 0; // 0 --> technical, 1 --> administrative
        this.technicalServices = 'Τεχνικες Υπ.';
        this.administrativeServices = 'Διοικητικες Υπ.';
        this.cityChanged = 'Η πόλη άλλαξε σε';
        this.changeCityTitle = 'Αλλαγή πόλης';
        this.selectedCityText = 'Η επιλγμένη πόλη είναι η';
        this.changeCityText = 'Μπορείς να την αλλάξεις πατώντας στις 3 τελειες, πάνω δεξιά.';
        this.isSecondTime = false;
        this.setTranslationPairs();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.localTranslateService.translateLanguage();
            this.isSecondTime = yield this.storageCounter.isSecondTime();
            this.route.queryParamMap.subscribe((params) => {
                const polygon = CITY_POLYGONS[params.get('name')];
                this.city = {
                    name: params.get('name'),
                    lat: parseInt(params.get('lat'), 10),
                    long: parseInt(params.get('long'), 10),
                    zoom: parseInt(params.get('zoom'), 10),
                    url: params.get('url'),
                    polygon,
                    cityKey: params.get('cityKey')
                };
                if (this.city.name !== null) {
                    if (this.isSecondTime) {
                        this.alertService.showAlert({
                            head: this.changeCityTitle,
                            body: `${this.selectedCityText} ${this.city.name}. ${this.changeCityText}`
                        }, () => __awaiter(this, void 0, void 0, function* () {
                        }));
                        this.isSecondTime = false;
                    }
                    else {
                        this.storageState.stateIsTrue().then(state => {
                            if (!state) {
                                Toast.show({ text: `${this.selectedCityText} ${this.city.name}.` });
                                this.storageState.setState(true);
                            }
                        });
                    }
                }
            });
        });
    }
    servicesSegmentChanged(event) {
        this.typeOfService = event.detail.value;
    }
    onSearch(event) {
        this.query = event.target.value.toLowerCase();
    }
    presentPopover(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ToolbarPopoverComponent.present(this.popoverController, ev, [this.changeCityTitle], (data) => {
                if (data !== undefined) {
                    CitiesModalComponent.present(this.modalController, (city) => __awaiter(this, void 0, void 0, function* () { return this.changeCity(city); }));
                }
            });
        });
    }
    changeCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Toast.show({
                text: this.cityChanged + city.name
            });
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'technical-services', callback: (res) => this.technicalServices = res });
        this.localTranslateService.pairs.push({ key: 'administrative-services', callback: (res) => this.administrativeServices = res });
        this.localTranslateService.pairs.push({ key: 'city-changed', callback: (res) => this.cityChanged = res });
        this.localTranslateService.pairs.push({ key: 'change-city-title', callback: (res) => this.changeCityTitle = res });
        this.localTranslateService.pairs.push({ key: 'selected-city-text', callback: (res) => this.selectedCityText = res });
        this.localTranslateService.pairs.push({ key: 'change-city-text', callback: (res) => this.changeCityText = res });
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