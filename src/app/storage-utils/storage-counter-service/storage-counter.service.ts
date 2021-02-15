import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageCounterService {

  private storageKey = 'counter-val';

  constructor() { }

  async updateCounter(){
    const strVal = await Storage.get({key: this.storageKey});
    console.log(strVal);

    if (strVal.value === null || isNaN(Number(strVal.value))){
      await Storage.set({
        key: this.storageKey,
        value: '0'
      });
      return;
    }

    // let val: number = + await Storage.get({key: this.storageKey});
    let val = parseInt(strVal.value, 10);
    val++;
    await Storage.set({
      key: this.storageKey,
      value: val.toString()
    });
  }

  async isSecondTime(){
    const strVal = await Storage.get({key: this.storageKey});
    const val: number = + strVal.value;
    return val === 1;
  }

  async isMoreThanSecondTime(){
    const strVal = await Storage.get({key: this.storageKey});
    const val: number = + strVal.value;
    return val > 1;
  }

  async getValue(){
    const strVal = await Storage.get({key: this.storageKey});
    return +strVal.value;
  }
}
