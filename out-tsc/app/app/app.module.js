import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackArrowHeaderComponent } from './view-utils/back-arrow-header/back-arrow-header.component';
import { TechnicalFormComponent } from './technical-request/technical-form/technical-form.component';
import { GET_SERVICES_INTERFACE_DI_TOKEN } from './interface-adapters/GetServicesInterface';
import { ServicesCommunication } from './backend-communication/ServicesCommunication';
import { FormStepperComponent } from './view-utils/form-stepper/form-stepper.component';
import { TechnicalFormSubcategoryComponent } from './technical-request/technical-form-subcategory/technical-form-subcategory.component';
import { FormsModule } from '@angular/forms';
import { TechnicalFormInfoComponent } from './technical-request/technical-form-info/technical-form-info.component';
import { TechnicalFormMapComponent } from './technical-request/technical-form-map/technical-form-map.component';
import { TechnicalFormSubmitComponent } from './technical-request/technical-form-submit/technical-form-submit.component';
import { RequestDetailsComponent } from './requests/request-details/request-details.component';
import { RequestDetailsMapModalComponent } from './requests/request-details-map-modal/request-details-map-modal.component';
import { DetailsBottomBarComponent } from './requests/details-bottom-bar/details-bottom-bar.component';
import { RequestRatingComponent } from './requests/request-rating/request-rating.component';
import { RequestsTabPageModule } from './main-screens/requests-tab/requests-tab.module';
import { TechnicalFormImageComponent } from './technical-request/technical-form-image/technical-form-image.component';
import { CitiesModalComponent } from './view-utils/cities-modal/cities-modal.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { NeighborhoodComponent } from './neighborhood/neighborhood/neighborhood.component';
import { NeighborhoodMapComponent } from './neighborhood/neighborhood-map/neighborhood-map.component';
import { MapComponent } from './view-utils/map/map.component';
import { NeighborhoodMessagesComponent } from './neighborhood/neighborhood-messages/neighborhood-messages.component';
import { AdministrativeFormComponent } from './administrative-request/administrative-form/administrative-form.component';
import { AdministrativeFormBasicInfoComponent } from './administrative-request/administrative-form-basic-info/administrative-form-basic-info.component';
import { ToolbarPopoverComponent } from './view-utils/toolbar-popover/toolbar-popover.component';
import { AdministrativeFormSpecificInfoComponent } from './administrative-request/administrative-form-specific-info/administrative-form-specific-info.component';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { AdministrativeFormSubmitComponent } from './administrative-request/administrative-form-submit/administrative-form-submit.component';
import { ConsultationsListComponent } from './consultations/consultations-list/consultations-list.component';
import { ConsultationCardComponent } from './consultations/consultation-card/consultation-card.component';
import { ConsultationDetailsModalComponent } from './consultations/consultation-details/consultation-details-modal.component';
import { ConsultationCommentsModalComponent } from './consultations/consultation-comments-modal/consultation-comments-modal.component';
import { ConsultationCommentCardComponent } from './consultations/consultation-comment-card/consultation-comment-card.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
            DetailsBottomBarComponent,
            RequestRatingComponent,
            TechnicalFormImageComponent,
            CitiesModalComponent,
            ProfileComponent,
            NeighborhoodComponent,
            NeighborhoodMapComponent,
            MapComponent,
            NeighborhoodMessagesComponent,
            AdministrativeFormComponent,
            AdministrativeFormBasicInfoComponent,
            ToolbarPopoverComponent,
            AdministrativeFormSpecificInfoComponent,
            AdministrativeFormSubmitComponent,
            ConsultationsListComponent,
            ConsultationCardComponent,
            ConsultationDetailsModalComponent,
            ConsultationCommentsModalComponent,
            ConsultationCommentCardComponent,
        ],
        entryComponents: [],
        imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, RequestsTabPageModule],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            { provide: GET_SERVICES_INTERFACE_DI_TOKEN, useClass: ServicesCommunication },
            FileChooser
        ],
        exports: [
            BackArrowHeaderComponent,
            FormStepperComponent,
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map