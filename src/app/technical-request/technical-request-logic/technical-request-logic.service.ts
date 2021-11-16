import { Injectable } from '@angular/core';
import {TechnicalRequest} from '../../entities/TechnicalRequest';
import {TechnicalRequestRepositoryService} from '../technical-request-repository/technical-request-repository.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserService} from '../../user-service/user.service';
import {ProfileElement} from '../../entities/ProfileElement';
import {User} from '../../entities/User';
import {Recommendation} from '../../entities/Recommendation';


@Injectable({
  providedIn: 'root'
})
export class TechnicalRequestLogicService {
  public static readonly RECOMMENDATIONS_REQUEST = 'RECOMMENDATIONS';
  public static readonly POLICY_EMAIL_SMS_REQUEST = 'POLICY_EMAIL_SMS';
  public static readonly POLICY_ANONYMITY_REQUEST = 'POLICY_ANONYMITY';
  public static readonly NEW_ISSUE_REQUEST = 'NEW_ISSUE_REQUEST';
  public static readonly EMAIL_KEY = 'email';
  public static readonly PHONE_KEY = 'phone-number';

  request: TechnicalRequest;
  private verifiedEmail = false;
  private verifiedPhone = false;

  public isEmailVerified(): boolean { return this.verifiedEmail; }
  public isPhoneVerified(): boolean { return this.verifiedPhone; }

  constructor(private userService: UserService, private repository: TechnicalRequestRepositoryService) {
    this.setIsUserActive();
  }

  setIsUserActive(){
    const user = this.userService.getUser();
    this.repository.isUserActive(user.email, user.phone, user.fullName).subscribe(x => {
      this.verifiedEmail = x[1].activate_email === '1';
      this.verifiedPhone = x[0].activate_sms === '1';
    });
  }

  getEmailProfileElement(): ProfileElement {
    return ProfileElement.getProfileElementsFromUser(this.userService.getUser())[1];  // 1 --> email
  }

  getPhoneProfileElement(): ProfileElement {
    return ProfileElement.getProfileElementsFromUser(this.userService.getUser())[2];  // 2 --> phone
  }

  getPolicyAboutEmailsSms(): Observable<any>{
    if (this.isLocationUndefined()){
      return this.getUndefinedLocationError();
    }

    const lat = this.request.location.coordinates[0];
    const long = this.request.location.coordinates[1];

    return this.repository.getPolicyAboutEmailsSms(lat, long).pipe(
        map(x => ({
          type: TechnicalRequestLogicService.POLICY_EMAIL_SMS_REQUEST,
          value: x
        }))
    );
  }

  getPolicyAboutAnonymity(): Observable<any>{
    if (this.isLocationUndefined()){
      return this.getUndefinedLocationError();
    }

    const issueKey = this.request.subService.translationKey;
    const lat = this.request.location.coordinates[0];
    const long = this.request.location.coordinates[1];

    return this.repository.getPolicyAboutAnonymity(issueKey, lat, long).pipe(
        map(x => ({
          type: TechnicalRequestLogicService.POLICY_ANONYMITY_REQUEST,
          value: x
        }))
    );
  }

  getRecommendations(): Observable<any>{
    if (this.isLocationUndefined()){
      return this.getUndefinedLocationError();
    }

    const issueKey = this.request.service.translationKey;
    const lat = this.request.location.coordinates[0];
    const long = this.request.location.coordinates[1];

    return this.repository.getRecommendations(issueKey, lat, long).pipe(
        map( x => x.length > 0 ? x[0].bugs.map(e => new Recommendation(e)) : []),
        map(x => ({
          type: TechnicalRequestLogicService.RECOMMENDATIONS_REQUEST,
          value: x
        }))
    );
  }

  private isLocationUndefined(): boolean{
    return this.request.location.coordinates.length < 2;
  }

  private getUndefinedLocationError(): Observable<any>{
    return this.getErrorObservable('Latitude and/or longitude are not defined yet.');
  }

  sendActivationCode(key: string): Observable<any> {
    if (key === TechnicalRequestLogicService.EMAIL_KEY){
      return this.repository.sendActivationEmail(this.userService.getUser().email);
    }
    else if (key === TechnicalRequestLogicService.PHONE_KEY){
      return this.repository.sendActivationMobileMessage(this.userService.getUser().phone, this.userService.getUser().fullName);
    }

    return this.getErrorObservable('Invalid key.');
  }

  addNewIssue(): Observable<any>{
    if (this.userService.getUser().fullName === '' || this.userService.getUser().fullName === undefined){
      return this.getErrorObservable('No user name.');
    }
    return this.repository.addNewIssue(this.request, this.userService.getUser(), '').pipe(
        map(x => ({
          type: TechnicalRequestLogicService.NEW_ISSUE_REQUEST,
          value: x
        }))
    );
  }

  private getErrorObservable(error: string): Observable<any>{
    return new Observable(subscriber => {
      subscriber.error(error);
    });
  }
}
