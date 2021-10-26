import { Injectable } from '@angular/core';
import {User} from '../../entities/User';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProfileElement} from '../../entities/ProfileElement';
import {UserService} from '../../user-service/user.service';
import {ProfileRepositoryService} from '../profile-repository/profile-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileLogicService {

  constructor(private userService: UserService, private repository: ProfileRepositoryService) { }

  async waitForUser(): Promise<User>{
    let user = this.userService.getUser();
    if (!user){
      await this.userService.initUser();
      user = this.userService.getUser();
    }
    return user;
  }

  setUserValue(key: string, value: string){
    this.userService.setUserValue(key, value);
  }

  isUserActive(): Observable<any>{
    const user = this.userService.getUser();
    return this.repository.isUserActive(user.email, user.phone, user.fullName).pipe(
        map(x => x[0]),
        map(x => ({[ProfileElement.EMAIL_KEY]: x.activate_email === '1', [ProfileElement.PHONE_KEY]: x.activate_sms === '1'}))
    );
  }
}

