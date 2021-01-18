import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestsTabPage } from './requests-tab.page';
const routes = [
    {
        path: '',
        component: RequestsTabPage
    }
];
let RequestsTabPageRoutingModule = class RequestsTabPageRoutingModule {
};
RequestsTabPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RequestsTabPageRoutingModule);
export { RequestsTabPageRoutingModule };
//# sourceMappingURL=requests-tab-routing.module.js.map