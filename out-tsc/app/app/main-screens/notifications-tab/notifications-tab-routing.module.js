import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationsTabPage } from './notifications-tab.page';
import { NotificationCardComponent } from '../../notifications/notification-card/notification-card.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NotificationStarsComponent } from '../../notifications/notification-stars/notification-stars.component';
const routes = [
    {
        path: '',
        component: NotificationsTabPage
    }
];
let NotificationsTabPageRoutingModule = class NotificationsTabPageRoutingModule {
};
NotificationsTabPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes), IonicModule, CommonModule],
        exports: [RouterModule, NotificationCardComponent],
        declarations: [
            NotificationCardComponent,
            NotificationStarsComponent
        ]
    })
], NotificationsTabPageRoutingModule);
export { NotificationsTabPageRoutingModule };
//# sourceMappingURL=notifications-tab-routing.module.js.map