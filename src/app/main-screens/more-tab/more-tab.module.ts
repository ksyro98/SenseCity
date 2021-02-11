import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreTabPageRoutingModule } from './more-tab-routing.module';

import { MoreTabPage } from './more-tab.page';
import {MoreCardComponent} from '../../more/more-card/more-card.component';
import {FeedbackCardComponent} from '../../more/feedback-card/feedback-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MoreTabPageRoutingModule
    ],
    exports: [
        FeedbackCardComponent
    ],
    declarations: [MoreTabPage, MoreCardComponent, FeedbackCardComponent]
})
export class MoreTabPageModule {}
