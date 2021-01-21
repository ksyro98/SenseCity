import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';
import * as L from 'leaflet';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  elements: Element[];
  focus = false;
  city = 'Πάτρα';

  constructor(public modalController: ModalController) {
    this.elements = [];
  }

  ngOnInit() {
    this.setElements();
  }

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

  private setElements(){
    this.elements.push({
      label: 'Όνομα',
      value: 'Κωνσταντίνος Συροκώστας',
      inputType: 'text'
    });

    this.elements.push({
      label: 'Email',
      value: 'konstantinos.syrokostas@gmail.com',
      inputType: 'email'
    });

    this.elements.push({
      label: 'Τηλέφωνο',
      value: '6980082464',
      inputType: 'tel'
    });

    this.elements.push({
      label: 'Όνομα πατέρα',
      value: 'Γεώργιος Συροκώστας',
      inputType: 'text'
    });

    this.elements.push({
      label: 'Όνομα μητέρας',
      value: 'Αναστασία Βαρουτίδου',
      inputType: 'text'
    });

    this.elements.push({
      label: 'ΑΔΤ',
      value: 'ΑΑ 123456',
      inputType: 'text'
    });

    this.elements.push({
      label: 'ΑΦΜ',
      value: '123456789012345',
      inputType: 'number'
    });
  }
}

interface Element{
  label: string;
  value: string;
  inputType: string;
}

// interface CityElement extends Element {
//   label: string;
//   value: string;
//   inputType: string;
// }
