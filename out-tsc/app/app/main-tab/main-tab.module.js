import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainTabPageRoutingModule } from './main-tab-routing.module';
import { MainTabPage } from './main-tab.page';
import { TechnicalItemComponent } from '../technical-request/technical-item/technical-item.component';
import { TechnicalServicesListComponent } from '../technical-request/technical-services-list/technical-services-list.component';
let MainTabPageModule = class MainTabPageModule {
};
MainTabPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MainTabPageRoutingModule
        ],
        declarations: [MainTabPage, TechnicalItemComponent, TechnicalServicesListComponent]
    })
], MainTabPageModule);
export { MainTabPageModule };
//# sourceMappingURL=main-tab.module.js.map