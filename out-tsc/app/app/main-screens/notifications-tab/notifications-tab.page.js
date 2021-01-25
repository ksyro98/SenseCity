import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { NeighborhoodNotification } from '../../entities/notifications/NeighborhoodNotification';
import { CommentNotification } from '../../entities/notifications/CommentNotification';
import { RequestNotification } from '../../entities/notifications/RequestNotification';
import { CommentReplyNotification } from '../../entities/notifications/CommentReplyNotification';
import { NotificationType } from '../../entities/notifications/NotificationType';
import { ToolbarPopoverComponent } from '../../view-utils/toolbar-popover/toolbar-popover.component';
let NotificationsTabPage = class NotificationsTabPage {
    constructor(popoverController, alertService) {
        this.popoverController = popoverController;
        this.alertService = alertService;
        this.notificationType = NotificationType;
        this.selectedType = 'All';
        this.popoverOptionClicked = -1;
        this.showingRead = true;
        this.notifications = [];
    }
    ngOnInit() {
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
                'Τα έχω διαβάσει όλα.',
                this.showingRead ? 'Εμφάνιση μη αναγνωσμένων.' : 'Εμφανιση ολων',
                'Διγραφή Αναγνωσμένων.'
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
                            head: 'Διαγραφή',
                            body: 'Είσαι σίγουρος ότι θέλεις να διαγράψεις όλες τις αναγνωσμένες ειδοποιήσεις'
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
        this.notifications.push(new CommentNotification('Γιάννης Αντωνόπουλος', 'Δημιουργια νεου παρκου', false));
        this.notifications.push(new RequestNotification('Καθαριότητα', -1, false));
        this.notifications.push(new NeighborhoodNotification(false));
        this.notifications.push(new CommentNotification('Γιάννης Αντωνόπουλος', 'Δημιουργια νεου παρκου', true));
        this.notifications.push(new CommentReplyNotification('Αλέξης Παπαδόπουλος', false));
        this.notifications.push(new CommentReplyNotification('Αλέξης Παπαδόπουλος', true));
        this.notifications.push(new RequestNotification('Ηλεκτροφωτισμός', 3, true));
        this.notifications.push(new NeighborhoodNotification(true));
        this.notifications.push(new NeighborhoodNotification(true));
        this.notifications.push(new NeighborhoodNotification(true));
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