import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RequestsTabPageRoutingModule } from './requests-tab-routing.module';
import { RequestsTabPage } from './requests-tab.page';
import { RequestCardComponent } from '../requests/request-card/request-card.component';
import { RequestsListComponent } from '../requests/requests-list/requests-list.component';
import { StarsComponent } from '../view-utils/stars/stars.component';
let RequestsTabPageModule = class RequestsTabPageModule {
};
RequestsTabPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RequestsTabPageRoutingModule
        ],
        declarations: [RequestsTabPage, RequestCardComponent, RequestsListComponent, StarsComponent]
    })
], RequestsTabPageModule);
export { RequestsTabPageModule };
//# sourceMappingURL=requests-tab.module.js.map