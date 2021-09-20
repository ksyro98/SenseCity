import { Injectable } from '@angular/core';
import {User} from '../../entities/User';
import {ProfileRepositoryService} from '../profile-repository/profile-repository.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProfileElement} from '../../entities/ProfileElement';

@Injectable({
  providedIn: 'root'
})
export class ProfileLogicService {

  user: User = new User();

  constructor(private repository: ProfileRepositoryService) { }

  async waitForUser(): Promise<User>{
    this.user = await this.repository.getUser();
    return this.user;
  }

  setUserValue(key: string, value: string){
    this.user.setValue(key, value);
    this.repository.soreUserValue(key, value);
  }

  isUserActive(): Observable<any>{
    return this.repository.isUserActive(this.user.email, this.user.phone, this.user.fullName).pipe(
        map(x => x[0]),
        map(x => ({[ProfileElement.EMAIL_KEY]: x.activate_email === '1', [ProfileElement.PHONE_KEY]: x.activate_sms === '1'}))
    );
  }

  sendActivationCode(key: string): Observable<any> {
    if (key === ProfileElement.EMAIL_KEY){
      return this.repository.sendActivationEmail(this.user.email);
    }
    else if (key === ProfileElement.PHONE_KEY){
      return this.repository.sendActivationMobileMessage(this.user.phone, this.user.fullName);
    }

    return new Observable(subscriber => {
      subscriber.error('Invalid key');
    });
  }

  activateUser(key: string, code: string): Observable<any>{
    if (key === ProfileElement.EMAIL_KEY){
      return this.repository.activateEmail(this.user.email, code);
    }
    else if (key === ProfileElement.PHONE_KEY){
      return this.repository.activateMobile(this.user.phone, code);
    }

    return new Observable(subscriber => {
      subscriber.error('Invalid key');
    });
  }
}

