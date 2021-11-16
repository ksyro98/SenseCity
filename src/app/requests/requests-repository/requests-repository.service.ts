import { Injectable } from '@angular/core';
import {NetworkUtilsService} from '../../network-utils/network-utils.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsRepositoryService {

  constructor(private networkUtils: NetworkUtilsService) { }

  getIssues(userEmail: string, userPhoneNumber: string, issueStatus: string): Observable<any> {
    return this.networkUtils.findIssue(userEmail, userPhoneNumber, issueStatus);
  }

  getFullIssue(issueAlias: string): Observable<any>{
    return this.networkUtils.getFullIssue(issueAlias);
  }
}
