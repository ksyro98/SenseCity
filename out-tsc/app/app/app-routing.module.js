import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { TechnicalFormComponent } from './technical-request/technical-form/technical-form.component';
import { RequestDetailsComponent } from './requests/request-details/request-details.component';
import { RequestRatingComponent } from './requests/request-rating/request-rating.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { NeighborhoodComponent } from './neighborhood/neighborhood/neighborhood.component';
import { AdministrativeFormComponent } from './administrative-request/administrative-form/administrative-form.component';
import { ConsultationsListComponent } from './consultations/consultations-list/consultations-list.component';
import { SelectCityAtStartComponent } from './starting-screens/select-city-modal/select-city-at-start.component';
import { NoInternetComponent } from './starting-screens/no-internet/no-internet.component';
const routes = [
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
    },
    {
        path: 'neighborhood', component: NeighborhoodComponent
    },
    {
        path: 'administrative-form', component: AdministrativeFormComponent
    },
    {
        path: 'consultations', component: ConsultationsListComponent
    },
    {
        path: 'select-city', component: SelectCityAtStartComponent
    },
    {
        path: 'neighborhood-tab-old',
        loadChildren: () => import('./main-screens/neighborhood-tab/neighborhood-tab.module').then(m => m.NeighborhoodTabPageModule)
    },
    {
        path: 'no-internet', component: NoInternetComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map