import { Injectable } from '@angular/core';
import {StorageUserService} from '../../storage-utils/storage-user-service/storage-user.service';
import {User} from '../../entities/User';
import {NetworkUtilsService} from '../../network-utils/network-utils.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationRepositoryService {

  constructor(private storageUserService: StorageUserService, private networkUtils: NetworkUtilsService) { }

  sendActivationEmail(userEmail: string): Observable<any>{
    return this.networkUtils.sendActivationEmail(userEmail);
  }

  sendActivationMobileMessage(
      userMobile: string, userName: string, lat?: number, long?: number, city?: string
  ): Observable<any>{
    return this.networkUtils.sendActivationMobileMessage(userMobile, userName, lat, long, city);
  }

  activateEmail(userEmail: string, emailCode: string): Observable<any>{
    return this.networkUtils.activateEmail(userEmail, emailCode);
  }

  activateMobile(userPhone: string, emailCode: string): Observable<any>{
    return this.networkUtils.activateEmail(userPhone, emailCode);
  }
}
