var SelectCityAtStartComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { CITIES } from '../../constants/Cities';
let SelectCityAtStartComponent = SelectCityAtStartComponent_1 = class SelectCityAtStartComponent {
    constructor(cityParamsService, localTranslateService) {
        this.cityParamsService = cityParamsService;
        this.localTranslateService = localTranslateService;
        this.query = '';
        this.buttonWillExit = false;
        this.selectCityAtStart = 'Πριν ξεκινήσεις επίλεξε την πόλη σου.';
    }
    static present(modalController, onDismiss) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield modalController.create({
                component: SelectCityAtStartComponent_1,
                cssClass: 'general-modal-class',
            });
            modal.onDidDismiss()
                .then((data) => onDismiss(data));
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.cities = CITIES;
        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
    }
    onSearch(event) {
        this.query = event.target.value.toLowerCase();
    }
    exitComponent(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cityParamsService.navigate(city);
            // await this.router.navigate(
            //     ['../tabs/main-tab'],
            //     {
            //       relativeTo: this.route,
            //       queryParams: {
            //         name: city.name,
            //         lat: city.lat,
            //         long: city.long,
            //         zoom: city.zoom,
            //         url: city.url,
            //         polygon: city.polygon
            //       }
            //     }
            //     );
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'select-city-at-start', callback: (res) => this.selectCityAtStart = res });
        this.cities.forEach((city) => {
            this.localTranslateService.pairs.push({ key: city.cityKey, callback: (res) => city.name = res });
        });
    }
};
SelectCityAtStartComponent = SelectCityAtStartComponent_1 = __decorate([
    Component({
        selector: 'app-select-at-start',
        templateUrl: './select-city-at-start.component.html',
        styleUrls: ['./select-city-at-start.component.scss'],
    })
], SelectCityAtStartComponent);
export { SelectCityAtStartComponent };
//# sourceMappingURL=select-city-at-start.component.js.map