import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeighborhoodTabPageRoutingModule } from './neighborhood-tab-routing.module';

import { NeighborhoodTabPage } from './neighborhood-tab.page';
import {NeighborhoodMapComponent} from '../../neighborhood/neighborhood-map/neighborhood-map.component';
import {NeighborhoodMessagesComponent} from '../../neighborhood/neighborhood-messages/neighborhood-messages.component';
import {MapComponent} from '../../view-utils/map/map.component';
import {RequestsTabPageModule} from '../requests-tab/requests-tab.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NeighborhoodTabPageRoutingModule,
        RequestsTabPageModule
    ],
  exports: [
    MapComponent
  ],
  declarations: [NeighborhoodTabPage, NeighborhoodMapComponent, NeighborhoodMessagesComponent, MapComponent]
})
export class NeighborhoodTabPageModule {}
