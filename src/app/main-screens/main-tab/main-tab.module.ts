import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainTabPageRoutingModule } from './main-tab-routing.module';

import { MainTabPage } from './main-tab.page';
import {TechnicalItemComponent} from '../../technical-request/technical-item/technical-item.component';
import {TechnicalServicesListComponent} from '../../technical-request/technical-services-list/technical-services-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainTabPageRoutingModule
  ],
  declarations: [MainTabPage, TechnicalItemComponent, TechnicalServicesListComponent]
})
export class MainTabPageModule {}
