import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';
import {CITIES} from '../../constants/Cities';

@Component({
  selector: 'app-technical-form-map',
  templateUrl: './technical-form-map.component.html',
  styleUrls: ['./technical-form-map.component.scss'],
})
export class TechnicalFormMapComponent implements OnInit {

  private map;
  private locationMarker;
  city = CITIES[4];

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  async presentCitiesModal(){
    CitiesModalComponent.present(this.modalController, (city) => this.city = city);
  }
}
