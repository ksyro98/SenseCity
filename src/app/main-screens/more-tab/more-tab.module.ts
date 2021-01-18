import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreTabPageRoutingModule } from './more-tab-routing.module';

import { MoreTabPage } from './more-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreTabPageRoutingModule
  ],
  declarations: [MoreTabPage]
})
export class MoreTabPageModule {}
