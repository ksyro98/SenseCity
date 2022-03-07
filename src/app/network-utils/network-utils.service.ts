import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TechnicalRequest} from '../entities/TechnicalRequest';
import {User} from '../entities/User';
import {Plugins} from '@capacitor/core';
import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
import {RequestLocation} from '../entities/RequestLocation';
import {Mood} from '../entities/Mood';

const { Device } = Plugins;

const BASE_URL = 'http://apitest.sense.city:4000';

@Injectable({
  providedIn: 'root'
})
export class NetworkUtilsService {

  private deviceUuid;

  constructor(private http: HttpClient) {
    if (this.deviceUuid === undefined) {
      this.deviceUuid = '';
      Device.getInfo().then((info) => this.deviceUuid = info.uuid);
    }
  }

  private static getHeaders(): any{
    return {
      'Content-Type': 'application/json',
      Accept: '*/*'
    };
  }

  isUserActive(usersEmail: string, usersMobile: string, usersName: string, usersCity?: string): Observable<any>{
    const tempCity = 'testcity1';

    const url = `${BASE_URL}/api/1.0/is_activate_user`;

    const requestBody = {
      city: tempCity,
      email: usersEmail,
      mobile: usersMobile,
      name: usersName,
      uuid: this.deviceUuid
    };


    return this.http.post(url, requestBody, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  sendActivationEmail(userEmail: string): Observable<any>{
    const url = `${BASE_URL}/api/1.0/activate_user?uuid=${this.deviceUuid}&email=${userEmail}`;

    return this.http.post(url, {}, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  sendActivationMobileMessage(userMobile: string, userName: string, lat?: number, long?: number, city?: string): Observable<any>{

    lat = 38.29236177807543;
    long = 21.786332993872996;
    city = 'patras';

    const params = `uuid=${this.deviceUuid}&name=${userName.replace(' ', '%20')}&mobile=${userMobile}`
                        + `&lat=${lat}&long=${long}&city=${city}`;
    const url = `${BASE_URL}/api/1.0/activate_user?${params}`;

    return this.http.post(url, {}, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  activateEmail(userEmail: string, emailCode: string): Observable<any>{
    const url = `${BASE_URL}/api/1.0/activate_email?uuid=${this.deviceUuid}&code=${emailCode}&email=${userEmail}`;

    return this.http.post(url, {}, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  activateMobile(userPhone: string, mobileCode: string): Observable<any>{
    const url = `${BASE_URL}/api/1.0/activate_mobile?uuid=${this.deviceUuid}&code=${mobileCode}&mobile=${userPhone}`;

    console.log(url);

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

  getIssueRecommendations(serviceIssueKey: string, issueLat: number, issueLong: number): Observable<any>{
    const url = `${BASE_URL}/api/1.0/issue_recommendation`;

    const body = {
      issue: serviceIssueKey,
      lat: issueLat,
      long: issueLong
    };

    return this.http.post(url, body, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  addNewIssue(request: TechnicalRequest, user: User, userDeviceId: string): Observable<any>{
    const url = `${BASE_URL}/api/1.0/add_new_issue`;

    const body = {
      loc: request.location,
      issue: request.service.translationKey,
      device_id: userDeviceId,
      value_desc: request.subService.name,
      comments: request.comments,
      image_name: request.imageDataUrl,
      uuid: this.deviceUuid,
      name: user.fullName,
      email: user.email,
      mobile_num: user.phone
    };

    return this.http.post(url, body, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  subscribeToIssue(issueId: number, user: User): Observable<any>{
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

  findIssue(userEmail: string, userPhoneNumber: string, issueStatus: string): Observable<any>{
    const url = `${BASE_URL}/api/1.0/find_my_issue`;

    const body = {
      email: userEmail,
      mobile_num: userPhoneNumber,
      status: issueStatus
    };

    return this.http.post(url, body, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  getFullIssue(issueAlias: string): Observable<any>{
    const url = `${BASE_URL}/api/1.0/fullissue/${issueAlias}`;

    return this.http.get(url, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  setFeeling(mood: Mood, location: RequestLocation): Observable<any>{
    const url = `${BASE_URL}/api/1.0/feelings`;

    const body = {
      loc: location,
      issue: mood.getIssue(),
      device_id: this.deviceUuid,
      value_desc: mood.getValueDescription()
    };

    return this.http.post(url, body, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  registerLocation(email: string, latitude: number, longitude: number): Observable<any>{
    const url = `${BASE_URL}/api/1.0/register/myNeighboor`;

    const body = {
      fcmToken: '',
      email_user: email,
      set_longitude: longitude.toString(),
      set_lattitude: latitude.toString()
    };

    return this.httpWithFcmToken(url, body);
  }

  unregisterLocation(email: string): Observable<any>{
    const url = `${BASE_URL}/api/1.0/unregister/myNeighboor`;

    const body = {
      email_user: email,
    };

    return this.http.post(url, body, {
      headers: NetworkUtilsService.getHeaders()
    });
  }

  getNeighborhood(email: string): Observable<any>{
    const url = `${BASE_URL}/api/1.0/get_my_neighboor`;

    const body = {
      email_user: email,
      fcmToken: ''
    };

    return this.httpWithFcmToken(url, body);
  }

  getMessages(email: string): Observable<any>{
    const url = `${BASE_URL}/api/1.0/myNeighboor/get_my_msg`;

    const body = {
      email_user: email,
      fcmToken: ''
    };

    return this.httpWithFcmToken(url, body);
  }

  private httpWithFcmToken(url: string, body): Observable<any>{
    return new Observable<any>(subscriber => {
      this.getFcmToken().subscribe(token => {
        body.fcmToken = token;

        this.http.post(url, body, {
          headers: NetworkUtilsService.getHeaders()
        }).subscribe(res => subscriber.next(res));
      });
    });
  }

  private getFcmToken(): Observable<string>{
    return new Observable(subscriber => {
      FCM.getToken().then(token => subscriber.next(token));
    });
  }
}
