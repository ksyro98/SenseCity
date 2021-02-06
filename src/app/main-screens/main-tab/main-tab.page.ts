import {Component, OnInit} from '@angular/core';
import {ToolbarPopoverComponent} from '../../view-utils/toolbar-popover/toolbar-popover.component';
import {ModalController, PopoverController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';
import {Plugins} from '@capacitor/core';
import {City} from '../../entities/City';
import {CityAlertService} from '../../starting-screens/city-alert-service/city-alert.service';
import {FirstTimeStorageService} from '../../storage-utils/first-time-storage-service/first-time-storage.service';
import {FeedbackModalComponent} from '../../starting-screens/feedback-modal/feedback-modal.component';


const { Toast } = Plugins;

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.page.html',
  styleUrls: ['./main-tab.page.scss'],
})
export class MainTabPage implements OnInit {

  public typeOfService = 0; // 0 --> technical, 1 --> administrative
  public query: string;

  constructor(
      public popoverController: PopoverController,
      public modalController: ModalController,
      private alertService: CityAlertService,
      private firstTimeStorageService: FirstTimeStorageService
  ) { }

  async ngOnInit() {
    const isFirstTime = await this.firstTimeStorageService.isFirstTime();
    if (isFirstTime){
      this.alertService.showAlert(
          {
            head: 'Αλλαγη πόλης',
            body: 'Η επιλγμένη πόλη είναι η Πάτρα. Μπορείς να την αλλάξεις πατώντας στις 3 τελειες, πάνω δεξιά.'
          },
          async () => this.firstTimeStorageService.setFirstTime(false));
    }
  }

  public servicesSegmentChanged(event: any){
    this.typeOfService = event.detail.value;
    console.log(this.typeOfService);
  }

  public onSearch(event){
    this.query = event.target.value.toLowerCase();
  }

  async presentPopover(ev: any){
    ToolbarPopoverComponent.present(this.popoverController, ev, ['Αλλαγή πόλης'], (data) => {
      CitiesModalComponent.present(this.modalController, async (city) => this.changeCity(city));
    });
  }

  async changeCity(city: City){
    await Toast.show({
      text: 'Η πολη αλλαξε σε ' + city.name
    });
  }


}
