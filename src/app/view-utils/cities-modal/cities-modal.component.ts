import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CITIES} from '../../constants/Cities';
import {City} from '../../entities/City';

@Component({
  selector: 'app-cities-modal',
  templateUrl: './cities-modal.component.html',
  styleUrls: ['./cities-modal.component.scss'],
})
export class CitiesModalComponent implements OnInit {

  cities = CITIES;
  query = '';

  static async present(modalController: ModalController, onDismiss: (city: City) => void){
    const modal = await modalController.create({
      component: CitiesModalComponent,
      cssClass: 'cities-modal-class',
    });

    modal.onDidDismiss()
        .then((data) => {
          if (data.data !== null) {
            onDismiss(data.data);
          }
        });

    return await modal.present();
  }

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  onSearch(event){
    this.query = event.target.value.toLowerCase();
  }

  dismiss(city: City) {
    this.modalController.dismiss(city);
  }

  @HostListener('document:ionBackButton', ['$event'])
  private async overrideHardwareBackAction($event: any) {
    this.dismiss(null);
  }
}
