import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { NeighborhoodNotification } from '../../entities/notifications/NeighborhoodNotification';
import { CommentNotification } from '../../entities/notifications/CommentNotification';
import { RequestNotification } from '../../entities/notifications/RequestNotification';
import { CommentReplyNotification } from '../../entities/notifications/CommentReplyNotification';
import { NotificationType } from '../../entities/notifications/NotificationType';
import { ToolbarPopoverComponent } from '../../view-utils/toolbar-popover/toolbar-popover.component';
let NotificationsTabPage = class NotificationsTabPage {
    constructor(popoverController, alertService, localTranslateService) {
        this.popoverController = popoverController;
        this.alertService = alertService;
        this.localTranslateService = localTranslateService;
        this.notificationType = NotificationType;
        this.selectedType = 'All';
        this.popoverOptionClicked = -1;
        this.showingRead = true;
        this.notificationsText = 'Ειδοποιήσεις';
        this.allText = 'Όλες';
        this.requestsText = 'Αιτήσεις';
        this.neighborhoodText = 'Γειτονιά';
        this.commentsText = 'Σχόλια';
        this.parkText = 'Δημιουργία νέου πάρκου';
        this.cleaningText = 'Καθαριότητα';
        this.electricLightingText = 'Ηλεκτροφωτισμός';
        this.markAllAsRead = 'Τα έχω διαβάσει όλα.';
        this.showUnread = 'Εμφάνιση μη αναγνωσμένων.';
        this.showAll = 'Εμφάνιση όλων.';
        this.deleteRead = 'Διγραφή Αναγνωσμένων.';
        this.deleteDialogHead = 'Διγραφή';
        this.deleteDialogBody = 'Είσαι σίγουρος ότι θέλεις να διαγράψεις όλες τις αναγνωσμένες ειδοποιήσεις;';
        this.notifications = [];
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
        this.getNotifications();
    }
    shouldShowNotification(notification) {
        if (this.showingRead === false && notification.read) {
            return false;
        }
        if (this.selectedType === 'All' || this.selectedType === notification.type) {
            return true;
        }
        if (notification.type === NotificationType.COMMENT_REPLY && this.selectedType === NotificationType.COMMENT) {
            return true;
        }
        return false;
    }
    setSelectedType(type) {
        this.selectedType = type;
        console.log(this.selectedType);
    }
    presentPopover(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = [
                this.markAllAsRead,
                this.showingRead ? this.showUnread : this.showAll,
                this.deleteRead
            ];
            ToolbarPopoverComponent.present(this.popoverController, ev, items, (which) => {
                this.popoverOptionClicked = which;
                switch (this.popoverOptionClicked) {
                    case 0:
                        this.notifications = this.notifications.map((notification) => notification.getReadNotification());
                        console.log(this.notifications);
                        break;
                    case 1:
                        this.showingRead = !this.showingRead;
                        break;
                    case 2:
                        this.alertService.showAlert({
                            head: this.deleteDialogHead,
                            body: this.deleteDialogBody
                        }, () => {
                            for (let i = this.notifications.length - 1; i > -1; i--) {
                                if (this.notifications[i].read) {
                                    this.notifications.splice(i, 1);
                                }
                            }
                        }, true);
                        break;
                }
            });
        });
    }
    getNotifications() {
        this.notifications.push(new CommentNotification('Γιάννης Αντωνόπουλος', this.parkText, false, this.localTranslateService));
        this.notifications.push(new RequestNotification(this.cleaningText, -1, false, this.localTranslateService));
        this.notifications.push(new NeighborhoodNotification(false, this.localTranslateService));
        this.notifications.push(new CommentNotification('Γιάννης Αντωνόπουλος', this.parkText, true, this.localTranslateService));
        this.notifications.push(new CommentReplyNotification('Αλέξης Παπαδόπουλος', false, this.localTranslateService));
        this.notifications.push(new CommentReplyNotification('Αλέξης Παπαδόπουλος', true, this.localTranslateService));
        this.notifications.push(new RequestNotification(this.electricLightingText, 3, true, this.localTranslateService));
        this.notifications.push(new NeighborhoodNotification(true, this.localTranslateService));
        this.notifications.push(new NeighborhoodNotification(true, this.localTranslateService));
        this.notifications.push(new NeighborhoodNotification(true, this.localTranslateService));
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'notifications-text', callback: (res) => this.notificationsText = res });
        this.localTranslateService.pairs.push({ key: 'all-notifications', callback: (res) => this.allText = res });
        this.localTranslateService.pairs.push({ key: 'requests-notifications', callback: (res) => this.requestsText = res });
        this.localTranslateService.pairs.push({ key: 'neighborhood-notifications', callback: (res) => this.neighborhoodText = res });
        this.localTranslateService.pairs.push({ key: 'comments-notifications', callback: (res) => this.commentsText = res });
        this.localTranslateService.pairs.push({ key: '_park-text', callback: (res) => this.parkText = res });
        this.localTranslateService.pairs.push({ key: '_cleaning-text', callback: (res) => this.cleaningText = res });
        this.localTranslateService.pairs.push({ key: '_electric-lighting-text', callback: (res) => this.electricLightingText = res });
        this.localTranslateService.pairs.push({ key: 'mark-all-as-read', callback: (res) => this.markAllAsRead = res });
        this.localTranslateService.pairs.push({ key: 'show-unread', callback: (res) => this.showUnread = res });
        this.localTranslateService.pairs.push({ key: 'show-all', callback: (res) => this.showAll = res });
        this.localTranslateService.pairs.push({ key: 'delete-read', callback: (res) => this.deleteRead = res });
        this.localTranslateService.pairs.push({ key: 'delete-dialog-head', callback: (res) => this.deleteDialogHead = res });
        this.localTranslateService.pairs.push({ key: 'delete-dialog-body', callback: (res) => this.deleteDialogBody = res });
    }
};
NotificationsTabPage = __decorate([
    Component({
        selector: 'app-notifications-tab',
        templateUrl: './notifications-tab.page.html',
        styleUrls: ['./notifications-tab.page.scss'],
    })
], NotificationsTabPage);
export { NotificationsTabPage };
//# sourceMappingURL=notifications-tab.page.js.map