import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FirstTimeStorageService {

  constructor() { }

  async setFirstTime(firstTime: boolean){
    await Storage.set({
      key: 'first-time',
      value: firstTime.toString()
    });
  }

  async isFirstTime(){
    const ret = await Storage.get({key: 'first-time'});
    return ret.value === 'false' ? false : true;
  }
}
