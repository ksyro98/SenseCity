import { Component } from '@angular/core';
import {ModalController, Platform} from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
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
import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
import {StorageCityService} from './storage-utils/storage-city-service/storage-city.service';
import {City} from './entities/City';

const {Geolocation, SplashScreen, Network} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
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
    private userService: UserService,
    private storageCityService: StorageCityService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
      await this.platform.ready();

      this.userService.initUser();

      this.backButtonService.init();
      await this.storageCounter.updateCounter();
      await this.storageState.setState(false);

      this.localTranslateService.translate = this.translate;

      await FCM.requestPushPermission({
          ios9Support: {
              timeout: 10,
              interval: 0.3
          }
      });

      const isConnectedToNetwork = (await Network.getStatus()).connected;
      const isFirstTime = await this.storageCounter.isFirstTime();

      if (!isConnectedToNetwork){
          await this.router.navigate(['no-internet']);
      }
      else {
          try {
              let city: City;
              if (!isFirstTime) {
                  const currentPosition = await Geolocation.getCurrentPosition();
                  const lat = currentPosition.coords.latitude;
                  const long = currentPosition.coords.longitude;

                  city = getCityFromPoint(lat, long);
              }

              if (city === undefined || city === null) {
                  await this.retrieveStoredCity();
              } else {
                  await this.cityParamsService.navigate(this.getTranslatedCity(city));
              }
          } catch (error) {
              await this.retrieveStoredCity();
          }
      }

      await SplashScreen.hide();
  }

  private async retrieveStoredCity(){
      const city: City = await this.storageCityService.getCity();
      if (city){
          await this.cityParamsService.navigate(this.getTranslatedCity(city));
      }
      else{
          await this.router.navigate(['select-city'], {relativeTo: this.route});
      }
  }

  private getTranslatedCity(city){
      this.localTranslateService.pairs.push({key: city.cityKey, callback: (res: string) => city.name = res});
      this.localTranslateService.translateLanguage();
      return city;
  }

}
