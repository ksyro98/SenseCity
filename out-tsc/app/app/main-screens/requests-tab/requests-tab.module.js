import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RequestsTabPageRoutingModule } from './requests-tab-routing.module';
import { RequestsTabPage } from './requests-tab.page';
import { RequestCardComponent } from '../../requests/request-card/request-card.component';
import { RequestsListComponent } from '../../requests/requests-list/requests-list.component';
import { StarsComponent } from '../../view-utils/stars/stars.component';
import { DividerComponent } from '../../view-utils/divider/divider.component';
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
        exports: [
            StarsComponent,
            DividerComponent
        ],
        declarations: [RequestsTabPage, RequestCardComponent, RequestsListComponent, StarsComponent, DividerComponent]
    })
], RequestsTabPageModule);
export { RequestsTabPageModule };
//# sourceMappingURL=requests-tab.module.js.map