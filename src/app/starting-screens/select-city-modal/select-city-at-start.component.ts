import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {City} from '../../entities/City';
import {CITIES} from '../../constants/Cities';
import {ActivatedRoute, Router} from '@angular/router';
import {CityPolygon} from '../../entities/CityPolygon';
import {CityParamsService} from '../../view-utils/city-params-service/city-params.service';

@Component({
  selector: 'app-select-at-start',
  templateUrl: './select-city-at-start.component.html',
  styleUrls: ['./select-city-at-start.component.scss'],
})
export class SelectCityAtStartComponent implements OnInit {

  cities: City[];
  query = '';
  buttonWillExit = false;

  static async present(modalController: ModalController, onDismiss: (data: any) => void) {
    const modal = await modalController.create({
      component: SelectCityAtStartComponent,
      cssClass: 'general-modal-class',
    });

    modal.onDidDismiss()
        .then((data) => onDismiss(data));

    return await modal.present();
  }

  constructor(private cityParamsService: CityParamsService) { }

  ngOnInit() {
    this.cities = CITIES;
  }

  onSearch(event){
    this.query = event.target.value.toLowerCase();
  }

  async exitComponent(city: City){
    await this.cityParamsService.navigate(city);
    // await this.router.navigate(
    //     ['../tabs/main-tab'],
    //     {
    //       relativeTo: this.route,
    //       queryParams: {
    //         name: city.name,
    //         lat: city.lat,
    //         long: city.long,
    //         zoom: city.zoom,
    //         url: city.url,
    //         polygon: city.polygon
    //       }
    //     }
    //     );
  }

}


