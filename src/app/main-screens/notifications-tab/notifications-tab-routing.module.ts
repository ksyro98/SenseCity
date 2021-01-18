import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsTabPage } from './notifications-tab.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsTabPageRoutingModule {}
