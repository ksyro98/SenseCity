import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestsTabPage } from './requests-tab.page';

const routes: Routes = [
  {
    path: '',
    component: RequestsTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsTabPageRoutingModule {}
