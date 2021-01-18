import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BackArrowHeaderComponent} from './view-utils/back-arrow-header/back-arrow-header.component';
import {ExploreContainerComponent} from './explore-container/explore-container.component';
import {TechnicalFormComponent} from './technical-request/technical-form/technical-form.component';
import {TechnicalItemComponent} from './technical-request/technical-item/technical-item.component';
import {TechnicalServicesListComponent} from './technical-request/technical-services-list/technical-services-list.component';
import {GET_SERVICES_INTERFACE_DI_TOKEN, GetServicesInterface} from './interface-adapters/GetServicesInterface';
import {ServicesCommunication} from './backend-communication/ServicesCommunication';
import {FormStepperComponent} from './view-utils/form-stepper/form-stepper.component';
import {TechnicalFormSubcategoryComponent} from './technical-request/technical-form-subcategory/technical-form-subcategory.component';
import {FormsModule} from '@angular/forms';
import {TechnicalFormInfoComponent} from './technical-request/technical-form-info/technical-form-info.component';
import {TechnicalFormMapComponent} from './technical-request/technical-form-map/technical-form-map.component';
import {TechnicalFormSubmitComponent} from './technical-request/technical-form-submit/technical-form-submit.component';
import {RequestDetailsComponent} from './requests/request-details/request-details.component';
import {RequestDetailsMapModalComponent} from './requests/request-details-map-modal/request-details-map-modal.component';
import {RequestDetailsLocationBarComponent} from './requests/request-details-location-bar/request-details-location-bar.component';
import {RequestRatingComponent} from './requests/request-rating/request-rating.component';
import {RequestsTabPageModule} from './main-screens/requests-tab/requests-tab.module';
import {TechnicalFormImageComponent} from './technical-request/technical-form-image/technical-form-image.component';

@NgModule({
    declarations: [
        AppComponent,
        BackArrowHeaderComponent,
        TechnicalFormComponent,
        FormStepperComponent,
        TechnicalFormSubcategoryComponent,
        TechnicalFormInfoComponent,
        TechnicalFormMapComponent,
        TechnicalFormSubmitComponent,
        RequestDetailsComponent,
        RequestDetailsMapModalComponent,
        RequestDetailsLocationBarComponent,
        RequestRatingComponent,
        TechnicalFormImageComponent
    ],
  entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, RequestsTabPageModule],
  providers: [
      StatusBar,
      SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      { provide: GET_SERVICES_INTERFACE_DI_TOKEN, useClass: ServicesCommunication }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
