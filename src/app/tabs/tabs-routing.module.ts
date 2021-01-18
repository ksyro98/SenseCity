import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'notifications-tab',
        loadChildren: () => import('../main-screens/notifications-tab/notifications-tab.module').then(m => m.NotificationsTabPageModule)
      },
      {
        path: 'main-tab',
        loadChildren: () => import('../main-screens/main-tab/main-tab.module').then(m => m.MainTabPageModule)
      },
      {
        path: 'requests-tab',
        loadChildren: () => import('../main-screens/requests-tab/requests-tab.module').then(m => m.RequestsTabPageModule)
      },
      {
        path: 'more-tab',
        loadChildren: () => import('../main-screens/more-tab/more-tab.module').then(m => m.MoreTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/main-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/main-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
