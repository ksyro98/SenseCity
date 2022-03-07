import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {City} from '../../entities/City';
import {CITIES} from '../../constants/Cities';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageCityService {

  private storageKey = 'city-storage-key';

  constructor() { }

  async storeCity(city: City){
    await Storage.set({
      key: this.storageKey,
      value: city.cityKey
    });
  }

  async getCity(): Promise<City> {
    const storedCityKey = await Storage.get({key: this.storageKey});
    if (storedCityKey.value) {
      return CITIES.find((city) => city.cityKey === storedCityKey.value);
    }
  }
}
