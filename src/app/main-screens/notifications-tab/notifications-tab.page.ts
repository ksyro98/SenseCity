import { Component, OnInit } from '@angular/core';
import {GeneralNotification} from '../../entities/notifications/GeneralNotification';
import {NeighborhoodNotification} from '../../entities/notifications/NeighborhoodNotification';
import {CommentNotification} from '../../entities/notifications/CommentNotification';
import {RequestNotification} from '../../entities/notifications/RequestNotification';
import {CommentReplyNotification} from '../../entities/notifications/CommentReplyNotification';
import {NotificationType} from '../../entities/notifications/NotificationType';
import {not} from 'rxjs/internal-compatibility';
import {ToolbarPopoverComponent} from '../../view-utils/toolbar-popover/toolbar-popover.component';
import {PopoverController} from '@ionic/angular';
import {AlertService} from '../../view-utils/alert-service/alert.service';

@Component({
  selector: 'app-notifications-tab',
  templateUrl: './notifications-tab.page.html',
  styleUrls: ['./notifications-tab.page.scss'],
})
export class NotificationsTabPage implements OnInit {

  notifications: GeneralNotification[];
  notificationType = NotificationType;
  selectedType = 'All';
  private popoverOptionClicked = -1;
  private showingRead = true;

  constructor(public popoverController: PopoverController, private alertService: AlertService) {
    this.notifications = [];
  }

  ngOnInit() {
    this.getNotifications();
  }

  shouldShowNotification(notification: GeneralNotification){
    if (this.showingRead === false && notification.read){
      return false;
    }

    if (this.selectedType === 'All' || this.selectedType === notification.type){
      return true;
    }

    if (notification.type === NotificationType.COMMENT_REPLY && this.selectedType === NotificationType.COMMENT){
      return true;
    }

    return false;
  }

  setSelectedType(type: string){
    this.selectedType = type;
    console.log(this.selectedType);
  }

  async presentPopover(ev: any){
    const popover = await this.popoverController.create({
      component:  ToolbarPopoverComponent,
      cssClass: 'toolbar-popover-class',
      event: ev,
      translucent: true,
      componentProps: {
        showingRead: this.showingRead
      }
    });

    popover.onDidDismiss().then((data) => {
      this.popoverOptionClicked = data.data;

      switch (this.popoverOptionClicked){
        case 0:
          this.notifications = this.notifications.map((notification) => notification.getReadNotification());
          console.log(this.notifications);
          break;
        case 1:
          this.showingRead = !this.showingRead;
          break;
        case 2:
          this.alertService.showAlert(
              'Διαγραφή',
              'Είσαι σίγουρος ότι θέλεις να διαγράψεις όλες τις αναγνωσμένες ειδοποιήσεις',
              () => {
                for (let i = this.notifications.length - 1; i > -1; i--) {
                  if (this.notifications[i].read){
                    this.notifications.splice(i, 1);
                  }
                }
              },
              true);
          break;
      }
    });

    return await popover.present();
  }

  getNotifications(){
    this.notifications.push(new CommentNotification('Γιάννης Αντωνόπουλος', 'Δημιουργια νεου παρκου', false));
    this.notifications.push(new RequestNotification('Καθαριότητα', -1,  false));
    this.notifications.push(new NeighborhoodNotification(false));
    this.notifications.push(new CommentNotification('Γιάννης Αντωνόπουλος', 'Δημιουργια νεου παρκου', true));
    this.notifications.push(new CommentReplyNotification('Αλέξης Παπαδόπουλος', false));
    this.notifications.push(new CommentReplyNotification('Αλέξης Παπαδόπουλος', true));
    this.notifications.push(new RequestNotification('Ηλεκτροφωτισμός', 3,  true));
    this.notifications.push(new NeighborhoodNotification(true));
    this.notifications.push(new NeighborhoodNotification(true));
    this.notifications.push(new NeighborhoodNotification(true));
  }
}
