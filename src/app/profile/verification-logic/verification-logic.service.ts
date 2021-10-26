import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ProfileElement} from '../../entities/ProfileElement';
import {UserService} from '../../user-service/user.service';
import {VerificationRepositoryService} from '../verification-repository/verification-repository.service';

@Injectable({
  providedIn: 'root'
})
export class VerificationLogicService {

  constructor(private userService: UserService, private repository: VerificationRepositoryService) { }

  sendActivationCode(key: string): Observable<any> {
    const user = this.userService.getUser();
    if (key === ProfileElement.EMAIL_KEY){
      return this.repository.sendActivationEmail(user.email);
    }
    else if (key === ProfileElement.PHONE_KEY){
      return this.repository.sendActivationMobileMessage(user.phone, user.fullName);
    }

    return new Observable(subscriber => {
      subscriber.error('Invalid key');
    });
  }

  activateUser(key: string, code: string): Observable<any>{
    const user = this.userService.getUser();
    if (key === ProfileElement.EMAIL_KEY){
      return this.repository.activateEmail(user.email, code);
    }
    else if (key === ProfileElement.PHONE_KEY){
      return this.repository.activateMobile(user.phone, code);
    }

    return new Observable(subscriber => {
      subscriber.error('Invalid key');
    });
  }
}
