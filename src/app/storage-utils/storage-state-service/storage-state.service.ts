import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageStateService {

  private storageKey = 'st-state';

  constructor() { }

  async setState(val: boolean){
    await Storage.set({
      key: this.storageKey,
      value: val.toString()
    });
  }

  async stateIsTrue(){
    const state = await Storage.get({ key: this.storageKey });
    return state.value === 'true';
  }

}
