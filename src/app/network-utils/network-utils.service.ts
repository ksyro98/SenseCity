import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {JsonArray} from '@angular-devkit/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TechnicalRequest} from '../entities/TechnicalRequest';
import {User} from '../entities/User';
import {Recommendation} from '../entities/Recommendation';

const BASE_URL = 'http://apitest.sense.city:4000';

@Injectable({
  providedIn: 'root'
})
export class NetworkUtilsService {

  constructor(private http: HttpClient) { }

  private static getHeaders(): any{
    return {
      'Content-Type': 'application/json',
      Accept: '*/*'
      // 'Accept-Encoding': 'gzip, deflate, br',
      // Connection: 'keep-alive'
    };
  }


  isUserActive(
      usersEmail: string, usersMobile: string, usersName: string, usersCity?: string, usersUuid?: string
  ): Observable<any>{

    const tempCity = 'testcity1';
    const tempUuid = 'web-site';

    const url = `${BASE_URL}/api/1.0/is_activate_user`;

    const requestBody = {
      city: tempCity,
      email: usersEmail,
      mobile: usersMobile,
      name: usersName,
      uuid: tempUuid
    };

    return  this.http.post(url, requestBody, {
      headers: NetworkUtilsService.getHeaders()
    });
  }


  sendActivationEmail(userEmail: string, userUuid?: string): Observable<any>{
    userUuid = 'web-site';
    const url = `${BASE_URL}/api/1.0/activate_user?uuid=${userUuid}&email=${userEmail}`;

    return this.http.post(url, {}, {
      headers: NetworkUtilsService.getHeaders()
    });
  }


  sendActivationMobileMessage(
      userMobile: string, userName: string, userUuid?: string, lat?: number, long?: number, city?: string
  ): Observable<any>{
    userUuid = 'web-site';

    lat = 38.29236177807543;
    long = 21.786332993872996;
    city = 'patras';

    const params = `uuid=${userUuid}&name=${userName.replace(' ', '%20')}&mobile=${userMobile}&lat=${lat}&long=${long}&city=${city}`;
    const url = `${BASE_URL}/api/1.0/activate_user?${params}`;

    return this.http.post(url, {}, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  activateEmail(userEmail: string, emailCode: string, userUuid?: string): Observable<any>{
    userUuid = 'web-site';

    const url = `${BASE_URL}/api/1.0/activate_email?uuid=${userUuid}&code=${emailCode}&email=${userEmail}`;

    return this.http.post(url, {}, {
      headers: NetworkUtilsService.getHeaders()
    });
  }


  activateMobile(userPhone: string, mobileCode: string, userUuid?: string): Observable<any>{
    userUuid = 'web-site';

    const url = `${BASE_URL}/api/1.0/activate_mobile?uuid=${userUuid}&code=${mobileCode}&mobile=${userPhone}`;

    return this.http.post(url, {}, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  getPolicyAboutEmailsSms(lat: number, long: number): Observable<any>{
    const url = `${BASE_URL}/api/1.0/activate_city_policy?lat=${lat}&long=${long}`;

    return this.http.post(url, {}, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  getPolicyAboutAnonymity(issue: string, lat: number, long: number): Observable<any>{
    const url = `${BASE_URL}/api/1.0/city_policy?coordinates=[${lat},${long}]&issue=${issue}`;

    return this.http.get(url, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  getIssueRecommendations(subServiceIssue: string, issueLat: number, issueLong: number): Observable<any>{
    const url = `${BASE_URL}/api/1.0/issue_recommendation`;

    const body = {
      issue: subServiceIssue,
      lat: issueLat,
      long: issueLong
    };

    return this.http.post(url, body, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  addNewIssue(request: TechnicalRequest, user: User, userDeviceId: string, userId: string): Observable<any>{
    const url = `${BASE_URL}/api/1.0/add_new_issue`;

    const body = {
      loc: {
        type: request.location.type,
        coordinates: [request.location.coordinates[1], request.location.coordinates[0]]
      },
      issue: request.service.translationKey,
      device_id: userDeviceId,
      value_desc: request.subService.name,
      comments: request.comments,
      image_name: request.image,
      uuid: userId,
      name: user.fullName,
      email: user.email,
      mobile_num: user.phone
    };

    return this.http.post(url, body, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  subscribeToIssue(issueId: number, user: User){
    const url = `${BASE_URL}/api/1.0/issue_subscribe`;

    const body = {
      bug_id: issueId,
      email: user.email,
      mobile_num: user.phone,
      name: user.fullName
    };

    return this.http.post(url, body, {
      headers: NetworkUtilsService.getHeaders()
    });
  }
}
