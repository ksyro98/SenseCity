import { Injectable } from '@angular/core';
import {StorageUserService} from '../../storage-utils/storage-user-service/storage-user.service';
import {User} from '../../entities/User';
import {NetworkUtilsService} from '../../network-utils/network-utils.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileRepositoryService {

  constructor(private storageUserService: StorageUserService, private networkUtils: NetworkUtilsService) { }

  async getUser(): Promise<User>{
    return await this.storageUserService.getUser();
  }

  soreUserValue(key: string, value: string){
    this.storageUserService.storeUserFields(key, value);
  }

  isUserActive(email: string, mobile: string, name: string, city?: string, uuid?: string): Observable<any>{
    return this.networkUtils.isUserActive(email, mobile, name, city, uuid);
  }

  sendActivationEmail(userEmail: string, userUuid?: string): Observable<any>{
    return this.networkUtils.sendActivationEmail(userEmail, userUuid);
  }

  sendActivationMobileMessage(
      userMobile: string, userName: string, userUuid?: string, lat?: number, long?: number, city?: string
  ): Observable<any>{
    return this.networkUtils.sendActivationMobileMessage(userMobile, userName, userUuid, lat, long, city);
  }

  activateEmail(userEmail: string, emailCode: string, userUuid?: string): Observable<any>{
    return this.networkUtils.activateEmail(userEmail, emailCode);
  }

  activateMobile(userPhone: string, emailCode: string, userUuid?: string): Observable<any>{
    return this.networkUtils.activateEmail(userPhone, emailCode);
  }
}
