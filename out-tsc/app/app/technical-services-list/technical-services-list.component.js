import { __awaiter, __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { GET_SERVICES_INTERFACE_DI_TOKEN } from '../interface-adapters/GetServicesInterface';
let TechnicalServicesListComponent = class TechnicalServicesListComponent {
    // private getServicesInterface: GetServicesInterface;
    // TODO how can we remove the call to the ServicesCommunication
    constructor(getServicesInterface) {
        this.getServicesInterface = getServicesInterface;
        // this.getServicesInterface = new ServicesCommunication();
    }
    ngOnInit() {
        this.updateServices();
    }
    updateServices() {
        return __awaiter(this, void 0, void 0, function* () {
            this.technicalServices = yield this.getServicesInterface.getServices(0);
        });
    }
};
TechnicalServicesListComponent = __decorate([
    Component({
        selector: 'app-technical-services-list',
        templateUrl: './technical-services-list.component.html',
        styleUrls: ['./technical-services-list.component.scss'],
    }),
    __param(0, Inject(GET_SERVICES_INTERFACE_DI_TOKEN))
], TechnicalServicesListComponent);
export { TechnicalServicesListComponent };
//# sourceMappingURL=technical-services-list.component.js.map