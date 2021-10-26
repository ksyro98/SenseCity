import { Injectable } from '@angular/core';
import {User} from '../../entities/User';
import {Observable} from 'rxjs';
import {StorageUserService} from '../../storage-utils/storage-user-service/storage-user.service';
import {NetworkUtilsService} from '../../network-utils/network-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileRepositoryService {

  constructor(private storageUserService: StorageUserService, private networkUtils: NetworkUtilsService) { }

  isUserActive(email: string, mobile: string, name: string, city?: string, uuid?: string): Observable<any>{
    return this.networkUtils.isUserActive(email, mobile, name, city, uuid);
  }

}
