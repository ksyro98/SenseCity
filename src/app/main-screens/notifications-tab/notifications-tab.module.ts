import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsTabPageRoutingModule } from './notifications-tab-routing.module';

import { NotificationsTabPage } from './notifications-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsTabPageRoutingModule
  ],
  declarations: [NotificationsTabPage]
})
export class NotificationsTabPageModule {}
