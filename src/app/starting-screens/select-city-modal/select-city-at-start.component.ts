import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {City} from '../../entities/City';
import {CITIES} from '../../constants/Cities';
import {CityParamsService} from '../../view-utils/city-params-service/city-params.service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {StorageCityService} from '../../storage-utils/storage-city-service/storage-city.service';

@Component({
  selector: 'app-select-at-start',
  templateUrl: './select-city-at-start.component.html',
  styleUrls: ['./select-city-at-start.component.scss'],
})
export class SelectCityAtStartComponent implements OnInit {

  cities: City[];
  query = '';
  buttonWillExit = false;

  selectCityAtStartTxt = 'Πριν ξεκινήσεις επίλεξε την πόλη σου.';
  searchTxt = 'Αναζήτηση';

  static async present(modalController: ModalController, onDismiss: (data: any) => void) {
    const modal = await modalController.create({
      component: SelectCityAtStartComponent,
      cssClass: 'general-modal-class',
    });

    modal.onDidDismiss()
        .then((data) => onDismiss(data));

    return await modal.present();
  }

  constructor(
      private cityParamsService: CityParamsService,
      private localTranslateService: LocalTranslateService,
      private storageCityService: StorageCityService
  ) { }

  ngOnInit() {
    this.cities = CITIES;
    this.setTranslationPairs();
    this.localTranslateService.translateLanguage();
  }

  onSearch(event){
    this.query = event.target.value.toLowerCase();
  }

  async exitComponent(city: City){
    this.storageCityService.storeCity(city);
    await this.cityParamsService.navigate(this.getTranslatedCity(city));
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'select-city-at-start', callback: (res: string) => this.selectCityAtStartTxt = res});
    this.localTranslateService.pairs.push({key: 'search', callback: (res: string) => this.searchTxt = res});
    this.cities.forEach((city) => {
      this.localTranslateService.pairs.push({key: city.cityKey, callback: (res: string) => city.name = res});
    });
  }

  private getTranslatedCity(city){
    this.localTranslateService.pairs.push({key: city.cityKey, callback: (res: string) => city.name = res});
    this.localTranslateService.translateLanguage();
    return city;
  }
}


