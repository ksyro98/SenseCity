import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageTranslationService {
  private storageKey = 'st-translation';

  constructor() { }

  async setLanguage(language: string){
    await Storage.set({
      key: this.storageKey,
      value: language
    });

    console.log((await Storage.get({key: this.storageKey})).value);
  }

  async getLanguage(): Promise<string> {
    return (await Storage.get({ key: this.storageKey })).value;
  }
}
