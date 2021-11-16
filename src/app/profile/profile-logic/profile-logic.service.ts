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

  getUser(): User{
    return this.userService.getUser();
  }

  isUserActive(): Observable<any>{
    const user = this.userService.getUser();

    return this.repository.isUserActive(user.email, user.phone, user.fullName).pipe(
        map(x => ({
          [ProfileElement.EMAIL_KEY]: user.email.length === 0 || x[1].activate_email === '1',
          [ProfileElement.PHONE_KEY]: user.phone.length === 0 || x[0].activate_sms === '1'
        }))
    );
  }
}

