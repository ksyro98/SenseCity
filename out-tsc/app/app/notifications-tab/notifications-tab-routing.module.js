import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationsTabPage } from './notifications-tab.page';
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
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NotificationsTabPageRoutingModule);
export { NotificationsTabPageRoutingModule };
//# sourceMappingURL=notifications-tab-routing.module.js.map