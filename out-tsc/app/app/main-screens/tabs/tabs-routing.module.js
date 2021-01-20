import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'notifications-tab',
                loadChildren: () => import('../notifications-tab/notifications-tab.module').then(m => m.NotificationsTabPageModule)
            },
            {
                path: 'main-tab',
                loadChildren: () => import('../main-tab/main-tab.module').then(m => m.MainTabPageModule)
            },
            {
                path: 'requests-tab',
                loadChildren: () => import('../requests-tab/requests-tab.module').then(m => m.RequestsTabPageModule)
            },
            {
                path: 'more-tab',
                loadChildren: () => import('../more-tab/more-tab.module').then(m => m.MoreTabPageModule)
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
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs-routing.module.js.map