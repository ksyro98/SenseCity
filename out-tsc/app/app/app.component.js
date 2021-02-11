import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FeedbackModalComponent } from './starting-screens/feedback-modal/feedback-modal.component';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, modalController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.modalController = modalController;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            Geolocation.getCurrentPosition()
                .then(res => {
                const lat = res.coords.latitude;
                const long = res.coords.longitude;
                FeedbackModalComponent.present(this.modalController, () => { });
            })
                .catch(reason => console.log(reason));
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