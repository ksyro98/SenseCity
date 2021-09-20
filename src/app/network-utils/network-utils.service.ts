import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {JsonArray} from '@angular-devkit/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

}
