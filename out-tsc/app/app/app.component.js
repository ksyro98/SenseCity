import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { getCityFromPoint } from './constants/Cities';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
const { Geolocation, SplashScreen, Network } = Plugins;
let AppComponent = class AppComponent {
    constructor(platform, statusBar, modalController, storageCounter, storageState, storageFeedbackCounter, router, route, backButtonService, cityParamsService, translate, localTranslateService, userService, storageCityService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.modalController = modalController;
        this.storageCounter = storageCounter;
        this.storageState = storageState;
        this.storageFeedbackCounter = storageFeedbackCounter;
        this.router = router;
        this.route = route;
        this.backButtonService = backButtonService;
        this.cityParamsService = cityParamsService;
        this.translate = translate;
        this.localTranslateService = localTranslateService;
        this.userService = userService;
        this.storageCityService = storageCityService;
        this.initializeApp();
    }
    initializeApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.platform.ready();
            this.userService.initUser();
            this.backButtonService.init();
            yield this.storageCounter.updateCounter();
            yield this.storageState.setState(false);
            this.localTranslateService.translate = this.translate;
            yield FCM.requestPushPermission({
                ios9Support: {
                    timeout: 10,
                    interval: 0.3
                }
            });
            const isConnectedToNetwork = (yield Network.getStatus()).connected;
            const isFirstTime = yield this.storageCounter.isFirstTime();
            if (!isConnectedToNetwork) {
                yield this.router.navigate(['no-internet']);
            }
            else {
                try {
                    let city;
                    if (!isFirstTime) {
                        const currentPosition = yield Geolocation.getCurrentPosition();
                        const lat = currentPosition.coords.latitude;
                        const long = currentPosition.coords.longitude;
                        city = getCityFromPoint(lat, long);
                    }
                    if (city === undefined || city === null) {
                        yield this.retrieveStoredCity();
                    }
                    else {
                        yield this.cityParamsService.navigate(this.getTranslatedCity(city));
                    }
                }
                catch (error) {
                    yield this.retrieveStoredCity();
                }
            }
            yield SplashScreen.hide();
        });
    }
    retrieveStoredCity() {
        return __awaiter(this, void 0, void 0, function* () {
            const city = yield this.storageCityService.getCity();
            if (city) {
                yield this.cityParamsService.navigate(this.getTranslatedCity(city));
            }
            else {
                yield this.router.navigate(['select-city'], { relativeTo: this.route });
            }
        });
    }
    getTranslatedCity(city) {
        this.localTranslateService.pairs.push({ key: city.cityKey, callback: (res) => city.name = res });
        this.localTranslateService.translateLanguage();
        return city;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map