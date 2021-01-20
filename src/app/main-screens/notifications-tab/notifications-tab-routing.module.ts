import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsTabPage } from './notifications-tab.page';
import {NotificationCardComponent} from '../../notifications/notification-card/notification-card.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {NotificationStarsComponent} from '../../notifications/notification-stars/notification-stars.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsTabPage
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes), IonicModule, CommonModule],
    exports: [RouterModule, NotificationCardComponent],
    declarations: [
        NotificationCardComponent,
        NotificationStarsComponent
    ]
})
export class NotificationsTabPageRoutingModule {}
