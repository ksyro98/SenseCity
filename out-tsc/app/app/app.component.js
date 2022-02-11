import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { getCityFromPoint } from './constants/Cities';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
const { Geolocation, SplashScreen, Network } = Plugins;
let AppComponent = class AppComponent {
    constructor(platform, 
    // private splashScreen: SplashScreen,
    statusBar, modalController, storageCounter, storageState, storageFeedbackCounter, router, route, backButtonService, cityParamsService, translate, localTranslateService, userService) {
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
        this.initializeApp();
    }
    initializeApp() {
        return __awaiter(this, void 0, void 0, function* () {
            const ready = yield this.platform.ready();
            console.log(ready);
            // this.statusBar.styleDefault();
            // this.statusBar.styleLightContent();
            // this.statusBar.backgroundColorByHexString('#f8faf7');
            // this.statusBar.overlaysWebView(true);
            // this.statusBar.backgroundColorByHexString('#f8faf7');
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
            // MOVE THIS OUT OF HERE
            // const moreThanSecondTime = await this.storageCounter.isMoreThanSecondTime();
            // const showDialog = await this.storageFeedbackCounter.showDialog();
            // if (moreThanSecondTime && showDialog) {
            //     await FeedbackModalComponent.present(this.modalController, () => { });
            // }
            const isConnectedToNetwork = (yield Network.getStatus()).connected;
            const isFirstTime = yield this.storageCounter.isFirstTime();
            if (!isConnectedToNetwork) {
                yield this.router.navigate(['no-internet'], { relativeTo: this.route });
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
                        // here we present the 'select a city modal'
                        yield this.router.navigate(['select-city'], { relativeTo: this.route });
                    }
                    else {
                        // here we set the current city as the user's city
                        yield this.cityParamsService.navigate(this.getTranslatedCity(city));
                    }
                }
                catch (error) {
                    yield this.router.navigate(['select-city'], { relativeTo: this.route });
                }
            }
            yield SplashScreen.hide();
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