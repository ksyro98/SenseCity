import { Injectable } from '@angular/core';
import {User} from '../entities/User';
import {StorageUserService} from '../storage-utils/storage-user-service/storage-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor(private storageUserService: StorageUserService) { }

  async initUser(){
    await this.getUserFromStorage();
  }

  private async getUserFromStorage() {
    this.user = await this.storageUserService.getUser();
  }

  getUser(): User{
    return this.user;
  }

  setUserValue(key: string, value: string){
    this.user.setValue(key, value);
    this.storageUserService.storeUserFields(key, value);
  }
}
