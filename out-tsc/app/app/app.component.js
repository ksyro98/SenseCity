import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { FeedbackModalComponent } from './starting-screens/feedback-modal/feedback-modal.component';
import { Plugins } from '@capacitor/core';
import { getCityFromPoint } from './constants/Cities';
const { Geolocation, SplashScreen } = Plugins;
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
            try {
                const currentPosition = yield Geolocation.getCurrentPosition();
                const lat = currentPosition.coords.latitude;
                const long = currentPosition.coords.longitude;
                const moreThanSecondTime = yield this.storageCounter.isMoreThanSecondTime();
                const showDialog = yield this.storageFeedbackCounter.showDialog();
                if (moreThanSecondTime && showDialog) {
                    yield FeedbackModalComponent
                        .present(this.modalController, () => { });
                }
                const city = getCityFromPoint(lat, long);
                if (city === undefined) {
                    // here we present the 'select a city modal'
                    yield this.router.navigate(['select-city'], { relativeTo: this.route });
                }
                else {
                    // here we set the current city as the user's city
                    yield this.cityParamsService.navigate(city);
                }
            }
            catch (error) {
                yield this.router.navigate(['select-city'], { relativeTo: this.route });
            }
            yield SplashScreen.hide();
            // this.splashScreen.hide();
        });
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