import {Component, OnInit} from '@angular/core';
import {ToolbarPopoverComponent} from '../../view-utils/toolbar-popover/toolbar-popover.component';
import {ModalController, PopoverController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';
import { Plugins } from '@capacitor/core';
import {City} from '../../entities/City';

const { Toast } = Plugins;

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.page.html',
  styleUrls: ['./main-tab.page.scss'],
})
export class MainTabPage implements OnInit {

  public typeOfService = 0; // 0 --> technical, 1 --> administrative
  public query: string;

  constructor(public popoverController: PopoverController, public modalController: ModalController) { }

  async ngOnInit() { }

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
