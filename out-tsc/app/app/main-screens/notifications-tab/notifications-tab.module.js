import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotificationsTabPageRoutingModule } from './notifications-tab-routing.module';
import { NotificationsTabPage } from './notifications-tab.page';
let NotificationsTabPageModule = class NotificationsTabPageModule {
};
NotificationsTabPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            NotificationsTabPageRoutingModule
        ],
        declarations: [NotificationsTabPage]
    })
], NotificationsTabPageModule);
export { NotificationsTabPageModule };
//# sourceMappingURL=notifications-tab.module.js.map