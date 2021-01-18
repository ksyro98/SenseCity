import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoreTabPage } from './more-tab.page';
const routes = [
    {
        path: '',
        component: MoreTabPage
    }
];
let MoreTabPageRoutingModule = class MoreTabPageRoutingModule {
};
MoreTabPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MoreTabPageRoutingModule);
export { MoreTabPageRoutingModule };
//# sourceMappingURL=more-tab-routing.module.js.map