import { Injectable } from '@angular/core';
import {City} from '../../entities/City';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CityParamsService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  async navigate(city: City){
    await this.router.navigate(
        ['../tabs/main-tab'],
        {
          relativeTo: this.route,
          queryParams: {
              name: city.name,
              lat: city.lat,
              long: city.long,
              zoom: city.zoom,
              url: city.url,
              polygon: city.polygon,
              cityKey: city.cityKey
          }
        }
    );
  }
}
