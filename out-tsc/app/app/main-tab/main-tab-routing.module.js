import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainTabPage } from './main-tab.page';
const routes = [
    {
        path: '',
        component: MainTabPage
    }
];
let MainTabPageRoutingModule = class MainTabPageRoutingModule {
};
MainTabPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MainTabPageRoutingModule);
export { MainTabPageRoutingModule };
//# sourceMappingURL=main-tab-routing.module.js.map