import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

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


  notificationsText = 'Ειδοποιήσεις';
  allText = 'Όλες';
  requestsText = 'Αιτήσεις';
  neighborhoodText = 'Γειτονιά';
  commentsText = 'Σχόλια';

  private parkText = 'Δημιουργία νέου πάρκου';
  private cleaningText = 'Καθαριότητα';
  private electricLightingText = 'Ηλεκτροφωτισμός';

  private markAllAsRead = 'Τα έχω διαβάσει όλα.';
  private showUnread = 'Εμφάνιση μη αναγνωσμένων.';
  private showAll = 'Εμφάνιση όλων.';
  private deleteRead = 'Διγραφή Αναγνωσμένων.';
  private deleteDialogHead = 'Διγραφή';
  private deleteDialogBody = 'Είσαι σίγουρος ότι θέλεις να διαγράψεις όλες τις αναγνωσμένες ειδοποιήσεις;';

  constructor(
      public popoverController: PopoverController,
      private alertService: AlertService,
      private localTranslateService: LocalTranslateService
  ) {
    this.notifications = [];
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
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

    const  items = [
      this.markAllAsRead,
      this.showingRead ? this.showUnread : this.showAll,
      this.deleteRead
    ];

    ToolbarPopoverComponent.present(this.popoverController, ev, items, (which) => {
      this.popoverOptionClicked = which;

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
              {
                head: this.deleteDialogHead,
                body: this.deleteDialogBody
              },
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
  }

  getNotifications(){
    this.notifications.push(new CommentNotification('Γιάννης Αντωνόπουλος', this.parkText, false, this.localTranslateService));
    this.notifications.push(new RequestNotification(this.cleaningText, -1,  false, this.localTranslateService));
    this.notifications.push(new NeighborhoodNotification(false, this.localTranslateService));
    this.notifications.push(new CommentNotification('Γιάννης Αντωνόπουλος', this.parkText, true, this.localTranslateService));
    this.notifications.push(new CommentReplyNotification('Αλέξης Παπαδόπουλος', false, this.localTranslateService));
    this.notifications.push(new CommentReplyNotification('Αλέξης Παπαδόπουλος', true, this.localTranslateService));
    this.notifications.push(new RequestNotification(this.electricLightingText, 3,  true, this.localTranslateService));
    this.notifications.push(new NeighborhoodNotification(true, this.localTranslateService));
    this.notifications.push(new NeighborhoodNotification(true, this.localTranslateService));
    this.notifications.push(new NeighborhoodNotification(true, this.localTranslateService));
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'notifications-text', callback: (res: string) => this.notificationsText = res});
    this.localTranslateService.pairs.push({key: 'all-notifications', callback: (res: string) => this.allText = res});
    this.localTranslateService.pairs.push({key: 'requests-notifications', callback: (res: string) => this.requestsText = res});
    this.localTranslateService.pairs.push({key: 'neighborhood-notifications', callback: (res: string) => this.neighborhoodText = res});
    this.localTranslateService.pairs.push({key: 'comments-notifications', callback: (res: string) => this.commentsText = res});

    this.localTranslateService.pairs.push({key: '_park-text', callback: (res: string) => this.parkText = res});
    this.localTranslateService.pairs.push({key: '_cleaning-text', callback: (res: string) => this.cleaningText = res});
    this.localTranslateService.pairs.push({key: '_electric-lighting-text', callback: (res: string) => this.electricLightingText = res});

    this.localTranslateService.pairs.push({key: 'mark-all-as-read', callback: (res: string) => this.markAllAsRead = res});
    this.localTranslateService.pairs.push({key: 'show-unread', callback: (res: string) => this.showUnread = res});
    this.localTranslateService.pairs.push({key: 'show-all', callback: (res: string) => this.showAll = res});
    this.localTranslateService.pairs.push({key: 'delete-read', callback: (res: string) => this.deleteRead = res});
    this.localTranslateService.pairs.push({key: 'delete-dialog-head', callback: (res: string) => this.deleteDialogHead = res});
    this.localTranslateService.pairs.push({key: 'delete-dialog-body', callback: (res: string) => this.deleteDialogBody = res});
  }
}
