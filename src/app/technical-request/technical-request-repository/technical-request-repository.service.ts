import { Injectable } from '@angular/core';
import {NetworkUtilsService} from '../../network-utils/network-utils.service';
import {Observable} from 'rxjs';
import {TechnicalRequest} from '../../entities/TechnicalRequest';
import {User} from '../../entities/User';

@Injectable({
  providedIn: 'root'
})
export class TechnicalRequestRepositoryService {
  constructor(private networkUtils: NetworkUtilsService) { }

  getPolicyAboutEmailsSms(lat: number, long: number): Observable<any>{
    return this.networkUtils.getPolicyAboutEmailsSms(lat, long);
  }

  getPolicyAboutAnonymity(issue: string, lat: number, long: number): Observable<any>{
    return this.networkUtils.getPolicyAboutAnonymity(issue, lat, long);
  }

  getRecommendations(issue: string, lat: number, long: number): Observable<any>{
    return this.networkUtils.getIssueRecommendations(issue, lat, long);
  }

  isUserActive(email: string, mobile: string, name: string, city?: string): Observable<any>{
    return this.networkUtils.isUserActive(email, mobile, name, city);
  }

  sendActivationEmail(userEmail: string): Observable<any>{
    return this.networkUtils.sendActivationEmail(userEmail);
  }

  sendActivationMobileMessage(
      userMobile: string, userName: string, lat?: number, long?: number, city?: string
  ): Observable<any>{
    return this.networkUtils.sendActivationMobileMessage(userMobile, userName, lat, long, city);
  }

  addNewIssue(request: TechnicalRequest, user: User, userDeviceId: string): Observable<any>{
    return this.networkUtils.addNewIssue(request, user, userDeviceId);
  }
}
