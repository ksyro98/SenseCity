import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TechnicalFormComponent} from './technical-request/technical-form/technical-form.component';
import {RequestDetailsComponent} from './requests/request-details/request-details.component';
import {RequestRatingComponent} from './requests/request-rating/request-rating.component';
import {ProfileComponent} from './profile/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'main-tab',
    loadChildren: () => import('./main-screens/main-tab/main-tab.module').then(m => m.MainTabPageModule)
  },
  {
    path: 'notifications-tab',
    loadChildren: () => import('./main-screens/notifications-tab/notifications-tab.module').then(m => m.NotificationsTabPageModule)
  },
  {
    path: 'requests-tab',
    loadChildren: () => import('./main-screens/requests-tab/requests-tab.module').then(m => m.RequestsTabPageModule)
  },
  {
    path: 'more-tab',
    loadChildren: () => import('./main-screens/more-tab/more-tab.module').then(m => m.MoreTabPageModule)
  },
  {
    path: 'technical-form', component: TechnicalFormComponent
  },
  {
    path: 'request-details', component: RequestDetailsComponent
  },
  {
    path: 'request-rating', component: RequestRatingComponent
  },
  {
    path: 'profile', component: ProfileComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
