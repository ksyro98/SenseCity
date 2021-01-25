import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';
import * as L from 'leaflet';
import {PROFILE_ELEMENTS} from '../../constants/ProfileElements';
import {ProfileElement} from '../../entities/ProfileElement';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  elements: ProfileElement[];
  focus = false;
  city = 'Πάτρα';

  constructor(public modalController: ModalController) {
    this.elements = PROFILE_ELEMENTS;
  }

  ngOnInit() { }

  async presentCitiesModal(){
    const modal = await this.modalController.create({
      component: CitiesModalComponent,
      cssClass: 'cities-modal-class',
    });

    modal.onDidDismiss()
        .then((data) => {
          if (data.data.name !== undefined) {
            this.city = data.data.name;
          }
        });

    return await modal.present();
  }
}
