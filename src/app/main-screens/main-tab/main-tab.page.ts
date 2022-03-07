import {Component, OnInit} from '@angular/core';
import {ToolbarPopoverComponent} from '../../view-utils/toolbar-popover/toolbar-popover.component';
import {ModalController, PopoverController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';
import {Plugins} from '@capacitor/core';
import {City} from '../../entities/City';
import {WelcomeAlertService} from '../../starting-screens/welcome-alert-service/welcome-alert.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CITY_POLYGONS} from '../../constants/Cities';
import {StorageCounterService} from '../../storage-utils/storage-counter-service/storage-counter.service';
import {StorageStateService} from '../../storage-utils/storage-state-service/storage-state.service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {StorageCityService} from '../../storage-utils/storage-city-service/storage-city.service';
import {StorageFeedbackCounterService} from '../../storage-utils/storage-feedback-counter-service/storage-feedback-counter.service';
import {FeedbackModalComponent} from '../../starting-screens/feedback-modal/feedback-modal.component';

const { Geolocation, Toast } = Plugins;

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.page.html',
  styleUrls: ['./main-tab.page.scss'],
})
export class MainTabPage implements OnInit {

  public typeOfService = 0; // 0 --> technical, 1 --> administrative
  public query: string;
  private city: City;

  technicalServices = 'Τεχνικες Υπ.';
  administrativeServices = 'Διοικητικες Υπ.';
  private cityChanged = 'Η πόλη άλλαξε σε';
  private changeCityTitle = 'Αλλαγή πόλης';
  private selectedCityText = 'Η επιλγμένη πόλη είναι η';
  private changeCityText = 'Μπορείς να την αλλάξεις πατώντας στις 3 τελειες, πάνω δεξιά.';
  private fillProfileTitleTxt = '';
  private fillProfileBodyTxt = '';

  private isFirstTime = false;

  constructor(
      public popoverController: PopoverController,
      public modalController: ModalController,
      private alertService: WelcomeAlertService,
      private storageCounter: StorageCounterService,
      private storageState: StorageStateService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private localTranslateService: LocalTranslateService,
      private storageCityService: StorageCityService,
      private storageFeedbackCounter: StorageFeedbackCounterService
  ) {
    this.setTranslationPairs();
  }

  async ngOnInit() {
    this.localTranslateService.translateLanguage();

    this.isFirstTime = await this.storageCounter.isFirstTime();

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
  }

  public servicesSegmentChanged(event: any){
    this.typeOfService = event.detail.value;
  }

  public onSearch(event){
    this.query = event.target.value.toLowerCase();
  }

  async presentPopover(ev: any){
    await ToolbarPopoverComponent.present(this.popoverController, ev, [this.changeCityTitle], (data) => {
      if (data !== undefined) {
        CitiesModalComponent.present(
            this.modalController,
            async (city) => this.changeCity(city)
        );
      }
    });
  }

  async changeCity(city: City){
    Toast.show({text: this.cityChanged + city.name});
    this.storageCityService.storeCity(city);
  }

  private showStartingMessages() {
    if (this.isFirstTime) {
      this.alertService.showAlert(
          {
            head: this.fillProfileTitleTxt,
            body: this.fillProfileBodyTxt,
          },
          () => this.navigateToProfileScreen(),
          () => {}
      );
      this.isFirstTime = false;
    }
    else {
      if (this.city.name !== null) {
        this.storageState.stateIsTrue().then(state => {
          if (!state) {
            Toast.show({text: `${this.selectedCityText} ${this.city.name}.`});
            this.storageState.setState(true);
          }
        });
      }
    }
  }

  private async showFeedbackDialogIfNeeded(){
    const shouldShowDialog = await this.storageFeedbackCounter.shouldShowDialog();
    if (shouldShowDialog){
      try {
        const currentPosition = await Geolocation.getCurrentPosition();
        await FeedbackModalComponent.present(
            this.modalController,
            {type: 'Point', coordinates: [currentPosition.coords.longitude, currentPosition.coords.latitude]}
        );
      } catch (e) {
        // do nothing
      }
    }
  }

  private  navigateToProfileScreen(){
    this.router.navigate(['/profile']);
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'technical-services', callback: (res: string) => this.technicalServices = res});
    this.localTranslateService.pairs.push({key: 'administrative-services', callback: (res: string) => this.administrativeServices = res});
    this.localTranslateService.pairs.push({key: 'city-changed', callback: (res: string) => this.cityChanged = res});
    this.localTranslateService.pairs.push({key: 'change-city-title', callback: (res: string) => this.changeCityTitle = res});
    this.localTranslateService.pairs.push({key: 'selected-city-text', callback: (res: string) => this.selectedCityText = res});
    this.localTranslateService.pairs.push({key: 'change-city-text', callback: (res: string) => this.changeCityText = res});
    this.localTranslateService.pairs.push({key: 'fill-profile-title', callback: (res: string) => this.fillProfileTitleTxt = res});
    this.localTranslateService.pairs.push({key: 'fill-profile-body', callback: (res: string) => this.fillProfileBodyTxt = res});
  }

  private translateCity(){
    this.localTranslateService.pairs.push({key: this.city.cityKey, callback: (res: string) => this.city.name = res});
  }

}
