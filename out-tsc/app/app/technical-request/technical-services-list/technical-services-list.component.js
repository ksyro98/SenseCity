import { __awaiter, __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { GET_SERVICES_INTERFACE_DI_TOKEN } from '../../interface-adapters/GetServicesInterface';
let TechnicalServicesListComponent = class TechnicalServicesListComponent {
    // private getServicesInterface: GetServicesInterface;
    // TODO how can we remove the call to the ServicesCommunication
    constructor(getServicesInterface, localTranslateService) {
        this.getServicesInterface = getServicesInterface;
        this.localTranslateService = localTranslateService;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateServices();
            this.setTranslationPairs();
            this.localTranslateService.translateLanguage();
        });
    }
    updateServices() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.technicalServices = yield this.getServicesInterface.getServices(0);
        });
    }
    setTranslationPairs() {
        this.technicalServices.forEach((service) => {
            this.localTranslateService.pairs.push({ key: service.translationKey, callback: (res) => service.name = res });
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