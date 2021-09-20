import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {User} from '../../entities/User';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageUserService {

  constructor() { }

  async storeUserFields(fieldKey: string, fieldValue: string){
    await Storage.set({
      key: fieldKey,
      value: fieldValue
    });
  }

  async getUser(): Promise<User>{
    const [name, email, phoneNumber, fathersName, mothersName, idNumber, taxNumber] = (await Promise.all([
      Storage.get({key: 'name'}),
      Storage.get({key: 'email'}),
      Storage.get({key: 'phone-number'}),
      Storage.get({key: 'fathers-name'}),
      Storage.get({key: 'mothers-name'}),
      Storage.get({key: 'id-number'}),
      Storage.get({key: 'tax-number'})
    ])).map((el) => el.value);

    return new User(name, email, phoneNumber, fathersName, mothersName, idNumber, taxNumber);
  }
}
