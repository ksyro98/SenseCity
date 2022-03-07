import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {StorageCounterService} from '../storage-counter-service/storage-counter.service';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageFeedbackCounterService {

  private storageKey = 'feedback-val';

  constructor(private storageCounter: StorageCounterService) { }

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

    let val = parseInt(strVal.value, 10);
    val++;
    await Storage.set({
      key: this.storageKey,
      value: val.toString()
    });
  }

  async shouldShowDialog(): Promise<boolean>{
    const strVal = await Storage.get({key: this.storageKey});
    const feedbackVal: number = + strVal.value;
    const counterVal = await this.storageCounter.getValue();

    return feedbackVal < parseInt((counterVal / 10).toString(), 10);
  }
}
