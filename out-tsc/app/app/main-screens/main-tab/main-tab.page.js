import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolbarPopoverComponent } from '../../view-utils/toolbar-popover/toolbar-popover.component';
import { CitiesModalComponent } from '../../view-utils/cities-modal/cities-modal.component';
import { Plugins } from '@capacitor/core';
import { CITY_POLYGONS } from '../../constants/Cities';
import { FeedbackModalComponent } from '../../starting-screens/feedback-modal/feedback-modal.component';
const { Geolocation, Toast } = Plugins;
let MainTabPage = class MainTabPage {
    constructor(popoverController, modalController, alertService, storageCounter, storageState, activatedRoute, router, localTranslateService, storageCityService, storageFeedbackCounter) {
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.alertService = alertService;
        this.storageCounter = storageCounter;
        this.storageState = storageState;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localTranslateService = localTranslateService;
        this.storageCityService = storageCityService;
        this.storageFeedbackCounter = storageFeedbackCounter;
        this.typeOfService = 0; // 0 --> technical, 1 --> administrative
        this.technicalServices = 'Τεχνικες Υπ.';
        this.administrativeServices = 'Διοικητικες Υπ.';
        this.cityChanged = 'Η πόλη άλλαξε σε';
        this.changeCityTitle = 'Αλλαγή πόλης';
        this.selectedCityText = 'Η επιλγμένη πόλη είναι η';
        this.changeCityText = 'Μπορείς να την αλλάξεις πατώντας στις 3 τελειες, πάνω δεξιά.';
        this.fillProfileTitleTxt = '';
        this.fillProfileBodyTxt = '';
        this.isFirstTime = false;
        this.setTranslationPairs();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.localTranslateService.translateLanguage();
            this.isFirstTime = yield this.storageCounter.isFirstTime();
            this.activatedRoute.queryParamMap.subscribe((params) => {
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
                this.translateCity();
                setTimeout(() => this.showStartingMessages(), 500);
            });
            setTimeout(() => this.showFeedbackDialogIfNeeded(), 600);
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
            Toast.show({ text: this.cityChanged + city.name });
            this.storageCityService.storeCity(city);
        });
    }
    showStartingMessages() {
        if (this.isFirstTime) {
            this.alertService.showAlert({
                head: this.fillProfileTitleTxt,
                body: this.fillProfileBodyTxt,
            }, () => this.navigateToProfileScreen(), () => { });
            this.isFirstTime = false;
        }
        else {
            if (this.city.name !== null) {
                this.storageState.stateIsTrue().then(state => {
                    if (!state) {
                        Toast.show({ text: `${this.selectedCityText} ${this.city.name}.` });
                        this.storageState.setState(true);
                    }
                });
            }
        }
    }
    showFeedbackDialogIfNeeded() {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldShowDialog = yield this.storageFeedbackCounter.shouldShowDialog();
            if (shouldShowDialog) {
                try {
                    const currentPosition = yield Geolocation.getCurrentPosition();
                    yield FeedbackModalComponent.present(this.modalController, { type: 'Point', coordinates: [currentPosition.coords.longitude, currentPosition.coords.latitude] });
                }
                catch (e) {
                    // do nothing
                }
            }
        });
    }
    navigateToProfileScreen() {
        this.router.navigate(['/profile']);
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'technical-services', callback: (res) => this.technicalServices = res });
        this.localTranslateService.pairs.push({ key: 'administrative-services', callback: (res) => this.administrativeServices = res });
        this.localTranslateService.pairs.push({ key: 'city-changed', callback: (res) => this.cityChanged = res });
        this.localTranslateService.pairs.push({ key: 'change-city-title', callback: (res) => this.changeCityTitle = res });
        this.localTranslateService.pairs.push({ key: 'selected-city-text', callback: (res) => this.selectedCityText = res });
        this.localTranslateService.pairs.push({ key: 'change-city-text', callback: (res) => this.changeCityText = res });
        this.localTranslateService.pairs.push({ key: 'fill-profile-title', callback: (res) => this.fillProfileTitleTxt = res });
        this.localTranslateService.pairs.push({ key: 'fill-profile-body', callback: (res) => this.fillProfileBodyTxt = res });
    }
    translateCity() {
        this.localTranslateService.pairs.push({ key: this.city.cityKey, callback: (res) => this.city.name = res });
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