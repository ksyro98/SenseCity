import { Component } from '@angular/core';
import {ModalController, Platform} from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FeedbackModalComponent} from './starting-screens/feedback-modal/feedback-modal.component';
import {Plugins} from '@capacitor/core';
import {getCityFromPoint} from './constants/Cities';
import {ActivatedRoute, Router} from '@angular/router';
import {BackButtonService} from './view-utils/back-button-service/back-button.service';
import {CityParamsService} from './view-utils/city-params-service/city-params.service';
import {StorageCounterService} from './storage-utils/storage-counter-service/storage-counter.service';
import {StorageStateService} from './storage-utils/storage-state-service/storage-state.service';
import {StorageFeedbackCounterService} from './storage-utils/storage-feedback-counter-service/storage-feedback-counter.service';
import {TranslateService} from '@ngx-translate/core';
import {LocalTranslateService} from './view-utils/local-translate-service/local-translate.service';
import {UserService} from './user-service/user.service';

const {Geolocation, SplashScreen} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalController: ModalController,
    private storageCounter: StorageCounterService,
    private storageState: StorageStateService,
    private storageFeedbackCounter: StorageFeedbackCounterService,
    private router: Router,
    private route: ActivatedRoute,
    private backButtonService: BackButtonService,
    private cityParamsService: CityParamsService,
    private translate: TranslateService,
    private localTranslateService: LocalTranslateService,
    private userService: UserService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
      const ready = await this.platform.ready();
      console.log(ready);

      // this.statusBar.styleDefault();
      // this.statusBar.styleLightContent();
      // this.statusBar.backgroundColorByHexString('#f8faf7');
      // this.statusBar.overlaysWebView(true);
      // this.statusBar.backgroundColorByHexString('#f8faf7');

      this.userService.initUser();

      this.backButtonService.init();
      await this.storageCounter.updateCounter();
      await this.storageState.setState(false);

      this.localTranslateService.translate = this.translate;

      try {
          const currentPosition = await Geolocation.getCurrentPosition();
          const lat = currentPosition.coords.latitude;
          const long = currentPosition.coords.longitude;

          const moreThanSecondTime = await this.storageCounter.isMoreThanSecondTime();
          const showDialog = await this.storageFeedbackCounter.showDialog();
          if (moreThanSecondTime && showDialog) {
              await FeedbackModalComponent
                  .present(this.modalController, () => { });
          }

          const city = getCityFromPoint(lat, long);
          if (city === undefined) {
              // here we present the 'select a city modal'
              await this.router.navigate(['select-city'], {relativeTo: this.route});
          } else {
              // here we set the current city as the user's city
              await this.cityParamsService.navigate(city);
          }
      }
      catch (error) {
          await this.router.navigate(['select-city'], {relativeTo: this.route});
      }

      await SplashScreen.hide();
      // this.splashScreen.hide();
  }

}
