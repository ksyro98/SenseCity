import {Component, Input, OnInit} from '@angular/core';
import {GeneralNotification} from '../../entities/notifications/GeneralNotification';
import {NotificationType} from '../../entities/notifications/NotificationType';
import {RequestNotification} from '../../entities/notifications/RequestNotification';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent implements OnInit {

  @Input() notification: GeneralNotification;
  notificationStars = -1;

  constructor() {
  }

  ngOnInit() {
    this.notificationStars = this.getStars();
  }

  isRequestNotification(){
    return this.notification.type === NotificationType.REQUEST;
  }

  private getStars(){
    if (this.notification.type === NotificationType.REQUEST){
      return (this.notification as RequestNotification).rating;
    }
    return -1;
  }
}

