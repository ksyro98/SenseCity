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

  constructor(
      public popoverController: PopoverController,
      public modalController: ModalController,
      private alertService: CityAlertService,
      private storageCounter: StorageCounterService,
      private storageState: StorageStateService,
      private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const isSecondTime = await this.storageCounter.isSecondTime();

    this.route.queryParamMap.subscribe((params) => {
      const polygon = CITY_POLYGONS[params.get('name')];
      this.city = {
        name: params.get('name'),
        lat: parseInt(params.get('lat'), 10),
        long: parseInt(params.get('long'), 10),
        zoom: parseInt(params.get('zoom'), 10),
        url: params.get('url'),
        polygon
      };

      if (this.city.name !== null) {
        if (isSecondTime) {
          this.alertService.showAlert(
              {
                head: 'Αλλαγη πόλης',
                body: `Η επιλγμένη πόλη είναι η ${this.city.name}. Μπορείς να την αλλάξεις πατώντας στις 3 τελειες, πάνω δεξιά.`
              },
              async () => {
              });
        } else {
          this.storageState.stateIsTrue().then(state => {
            if (!state){
              Toast.show({text: `Η επιλεγμενη πολη ειναι η ${this.city.name}.`});
              this.storageState.setState(true);
            }
          });
        }
      }

    });
  }

  public servicesSegmentChanged(event: any){
    this.typeOfService = event.detail.value;
    console.log(this.typeOfService);
  }

  public onSearch(event){
    this.query = event.target.value.toLowerCase();
  }

  async presentPopover(ev: any){
    await ToolbarPopoverComponent.present(this.popoverController, ev, ['Αλλαγή πόλης'], (data) => {
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
      text: 'Η πολη αλλαξε σε ' + city.name
    });
  }


}
