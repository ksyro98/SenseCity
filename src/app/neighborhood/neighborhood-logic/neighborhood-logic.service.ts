import { Injectable } from '@angular/core';
import {NeighborhoodRepositoryService} from '../neighborhood-repository/neighborhood-repository.service';
import {RequestLocation} from '../../entities/RequestLocation';
import {UserService} from '../../user-service/user.service';
import {Observable} from 'rxjs';
import {NeighborhoodMessage} from '../../entities/NeighborhoodMessage';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodLogicService {

  static readonly NO_EMAIL_ERROR = 'NO_EMAIL_ERROR';
  static readonly DEFAULT_POINT = {
    coordinates: [21.7350847, 38.246242],
    type: 'Point'
  };

  private location: RequestLocation;

  constructor(private repository: NeighborhoodRepositoryService, private userService: UserService) { }

  setLocation(location: RequestLocation){
    this.location = location;
  }

  registerNeighborhood(): Observable<any>{
    return this.userEmailExists()
        ? this.repository.registerLocation(this.userService.getUser().email, this.location)
        : new Observable<any>(subscriber => subscriber.error(NeighborhoodLogicService.NO_EMAIL_ERROR));
  }

  unregisterNeighborhood(): Observable<any>{
    return this.userEmailExists()
        ? this.repository.unregisterLocation(this.userService.getUser().email)
        : new Observable<any>(subscriber => subscriber.error(NeighborhoodLogicService.NO_EMAIL_ERROR));
  }

  getNeighborhood(): Observable<RequestLocation> {
    return this.userEmailExists()
        ? this.repository.getNeighborhood(this.userService.getUser().email)
            .pipe(map(x => x.length > 0 ? x[0].loc : NeighborhoodLogicService.DEFAULT_POINT))
        : new Observable<any>(subscriber => subscriber.next(NeighborhoodLogicService.DEFAULT_POINT));
  }

  private userEmailExists(): boolean{
    return this.userService.getUser() !== null && this.userService.getUser() !== undefined &&
        this.userService.getUser().email !== null && this.userService.getUser().email !== undefined &&
        this.userService.getUser().email !== '';
  }

  getMessages(): Observable<NeighborhoodMessage[]>{
    return this.userEmailExists()
        ? this.repository.getMessages(this.userService.getUser().email)
        : new Observable<any>(subscriber => subscriber.error(NeighborhoodLogicService.NO_EMAIL_ERROR));
  }
}
