import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CITIES} from '../../constants/Cities';
import {City} from '../../entities/City';
import {LocalTranslateService} from '../local-translate-service/local-translate.service';

@Component({
  selector: 'app-cities-modal',
  templateUrl: './cities-modal.component.html',
  styleUrls: ['./cities-modal.component.scss'],
})
export class CitiesModalComponent implements OnInit {

  cities = CITIES;
  query = '';

  selectCity: string;
  search: string;

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

  constructor(public modalController: ModalController, private localTranslateService: LocalTranslateService) {
    this.localTranslateService.pairs.push({key: 'select-city', callback: (res: string) => this.selectCity = res});
    this.localTranslateService.pairs.push({key: 'search', callback: (res: string) => this.search = res});
    this.cities.forEach((city) => {
      this.localTranslateService.pairs.push({key: city.cityKey, callback: (res: string) => city.name = res});
    });
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

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
