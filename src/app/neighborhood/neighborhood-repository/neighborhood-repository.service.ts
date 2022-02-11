import { Injectable } from '@angular/core';
import {NetworkUtilsService} from '../../network-utils/network-utils.service';
import {Observable} from 'rxjs';
import {RequestLocation} from '../../entities/RequestLocation';
import {map} from 'rxjs/operators';
import {NeighborhoodMessage} from '../../entities/NeighborhoodMessage';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodRepositoryService {

  constructor(private networkUtils: NetworkUtilsService) { }

  registerLocation(email: string, location: RequestLocation): Observable<any>{
    return this.networkUtils.registerLocation(email, location.coordinates[1], location.coordinates[0]);
  }

  unregisterLocation(email: string): Observable<any>{
    return this.networkUtils.unregisterLocation(email);
  }

  getNeighborhood(email: string): Observable<any>{
    return this.networkUtils.getNeighborhood(email);
  }

  getMessages(email: string): Observable<NeighborhoodMessage[]>{
    return this.networkUtils.getMessages(email).pipe(
        map((x) => x.map((e) => new NeighborhoodMessage(e.title, e.msg, e.startDate)))
    );
  }
}
