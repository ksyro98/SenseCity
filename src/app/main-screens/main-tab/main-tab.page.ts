import {Component, HostListener, OnInit} from '@angular/core';
import {ToolbarPopoverComponent} from '../../view-utils/toolbar-popover/toolbar-popover.component';
import {ModalController, PopoverController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';
import {Plugins} from '@capacitor/core';
import {City} from '../../entities/City';
import {CityAlertService} from '../../starting-screens/city-alert-service/city-alert.service';
import {FirstTimeStorageService} from '../../storage-utils/first-time-storage-service/first-time-storage.service';
import {FeedbackModalComponent} from '../../starting-screens/feedback-modal/feedback-modal.component';
import {ActivatedRoute} from '@angular/router';
import {CityPolygon} from '../../entities/CityPolygon';
import {CITY_POLYGONS} from '../../constants/Cities';
import {StorageCounterService} from '../../storage-utils/storage-counter-service/storage-counter.service';
import {StorageStateService} from '../../storage-utils/storage-state-service/storage-state.service';
import {StorageFeedbackCounterService} from '../../storage-utils/storage-feedback-counter-service/storage-feedback-counter.service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';


const { Toast } = Plugins;

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

  constructor(
      public popoverController: PopoverController,
      public modalController: ModalController,
      private alertService: CityAlertService,
      private storageCounter: StorageCounterService,
      private storageState: StorageStateService,
      private route: ActivatedRoute,
      private localTranslateService: LocalTranslateService
  ) {
    this.setTranslationPairs();
  }

  async ngOnInit() {
    this.localTranslateService.translateLanguage();

    const isSecondTime = await this.storageCounter.isSecondTime();

    this.route.queryParamMap.subscribe((params) => {
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

      if (this.city.name !== null) {
        if (isSecondTime) {
          this.alertService.showAlert(
              {
                head: this.changeCityTitle,
                body: `${this.selectedCityText} ${this.city.name}. ${this.changeCityText}`
              },
              async () => {
              });
        } else {
          this.storageState.stateIsTrue().then(state => {
            if (!state){
              Toast.show({text: `${this.selectedCityText} ${this.city.name}.`});
              this.storageState.setState(true);
            }
          });
        }
      }

    });
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
    await Toast.show({
      text: this.cityChanged + city.name
    });
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'technical-services', callback: (res: string) => this.technicalServices = res});
    this.localTranslateService.pairs.push({key: 'administrative-services', callback: (res: string) => this.administrativeServices = res});
    this.localTranslateService.pairs.push({key: 'city-changed', callback: (res: string) => this.cityChanged = res});
    this.localTranslateService.pairs.push({key: 'change-city-title', callback: (res: string) => this.changeCityTitle = res});
    this.localTranslateService.pairs.push({key: 'selected-city-text', callback: (res: string) => this.selectedCityText = res});
    this.localTranslateService.pairs.push({key: 'change-city-text', callback: (res: string) => this.changeCityText = res});
  }

}
