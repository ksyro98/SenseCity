import { Component } from '@angular/core';
import {ModalController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FeedbackModalComponent} from './starting-screens/feedback-modal/feedback-modal.component';
import {Plugins} from '@capacitor/core';
import {addWarning} from '@angular-devkit/build-angular/src/utils/webpack-diagnostics';

const {Geolocation} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalController: ModalController,
  ) {
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
}
