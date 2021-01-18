import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoreTabPageRoutingModule } from './more-tab-routing.module';
import { MoreTabPage } from './more-tab.page';
let MoreTabPageModule = class MoreTabPageModule {
};
MoreTabPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MoreTabPageRoutingModule
        ],
        declarations: [MoreTabPage]
    })
], MoreTabPageModule);
export { MoreTabPageModule };
//# sourceMappingURL=more-tab.module.js.map