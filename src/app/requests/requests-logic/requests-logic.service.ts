import { Injectable } from '@angular/core';
import {UserService} from '../../user-service/user.service';
import {RequestsRepositoryService} from '../requests-repository/requests-repository.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TechnicalRequest} from '../../entities/TechnicalRequest';
import {Service} from '../../entities/Service';
import {RequestSummary} from '../../entities/RequestSummary';

@Injectable({
  providedIn: 'root'
})
export class RequestsLogicService {

  constructor(private repository: RequestsRepositoryService, private userService: UserService) { }

  hasNoEmailAndPhone(): boolean{
    const user = this.userService.getUser();
    const noEmail = user.email === '' || user.email === undefined || user.email === null;
    const noPhone = user.phone === '' || user.phone === undefined || user.phone === null;
    return noEmail && noPhone;
  }

  getActiveIssues(): Observable<RequestSummary[]>{
    return this.getIssues('in_progress');
  }

  getCompletedIssues(): Observable<RequestSummary[]>{
    return this.getIssues('resolved');
  }

  private getIssues(status: string): Observable<RequestSummary[]>{
    const user = this.userService.getUser();

    if (this.hasNoEmailAndPhone()){
      return new Observable<RequestSummary[]>(subscriber => subscriber.next([]));
    }

    return this.repository.getIssues(user.email, user.phone, status).pipe(
        map(e => JSON.parse(e.body).bugs),
        map(bugs => bugs.map(e => new RequestSummary(e.status, e.alias[0], e.url, e.cf_city_name, e.cf_city_address, e.id)))
    );
  }

  getFullIssue(issueAlias: string): Observable<TechnicalRequest>{
      return this.repository.getFullIssue(issueAlias).pipe(
          map(e => new TechnicalRequest(
              Service.getTechnicalServiceFromKey(e[0].issue), Service.getSubService(e[0].issue, e[0].value_desc),
              e[0].comments, undefined, e[0].loc, undefined,
              e[0].bug_id, e[0].status, e[0].city_address,
              e[0].department, e[0].municipality, e[0].create_at)
          )
      );
  }
}
