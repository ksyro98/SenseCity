import { Component, OnInit } from '@angular/core';
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

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  onSearch(event){
    const query = event.target.value.toLowerCase();
    this.query = query;
    console.log(query);
  }

  dismiss(city: City) {
    this.modalController.dismiss(city);
  }
}
