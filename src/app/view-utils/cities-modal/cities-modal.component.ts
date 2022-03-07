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

  constructor(public modalController: ModalController, private localTranslateService: LocalTranslateService) {
    this.localTranslateService.pairs.push({key: 'select-city', callback: (res: string) => this.selectCity = res});
    this.localTranslateService.pairs.push({key: 'search', callback: (res: string) => this.search = res});
    this.cities.forEach((city) => {
      this.localTranslateService.pairs.push({key: city.cityKey, callback: (res: string) => city.name = res});
    });
  }

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

  private static strCompare(a: string, b: string){
    if (a === b) {
      return 0;
    }
    return  a < b ? -1 : 1;
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

  getSortedCities(): City[]{
    return this.cities.concat().sort((a, b) => CitiesModalComponent.strCompare(a.name, b.name));
  }

  @HostListener('document:ionBackButton', ['$event'])
  private async overrideHardwareBackAction($event: any) {
    this.dismiss(null);
  }
}
