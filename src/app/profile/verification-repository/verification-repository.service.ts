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
