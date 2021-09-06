import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeighborhoodTabPage } from './neighborhood-tab.page';

const routes: Routes = [
  {
    path: '',
    component: NeighborhoodTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeighborhoodTabPageRoutingModule {}
