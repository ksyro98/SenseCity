import { __awaiter, __decorate, __param } from "tslib";
import { Component, Inject, Input } from '@angular/core';
import { GET_SERVICES_INTERFACE_DI_TOKEN } from '../../interface-adapters/GetServicesInterface';
let AdministrativeServicesListComponent = class AdministrativeServicesListComponent {
    constructor(getServicesInterface, localTranslateService) {
        this.getServicesInterface = getServicesInterface;
        this.localTranslateService = localTranslateService;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.administrativeServices = yield this.getServicesInterface.getServices(1);
            this.setTranslationPairs();
            this.localTranslateService.translateLanguage();
        });
    }
    setTranslationPairs() {
        // TODO when the placeholder values are replaced change the line inside the loop with the commented one
        this.administrativeServices.forEach((service) => {
            this.localTranslateService.pairs.push({ key: service.translationKey, callback: (_) => null });
            // this.localTranslateService.pairs.push({key: service.translationKey, callback: (res: string) => service.name = res});
        });
    }
};
__decorate([
    Input()
], AdministrativeServicesListComponent.prototype, "query", void 0);
AdministrativeServicesListComponent = __decorate([
    Component({
        selector: 'app-administrative-services-list',
        templateUrl: './administrative-services-list.component.html',
        styleUrls: ['./administrative-services-list.component.scss'],
    }),
    __param(0, Inject(GET_SERVICES_INTERFACE_DI_TOKEN))
], AdministrativeServicesListComponent);
export { AdministrativeServicesListComponent };
//# sourceMappingURL=administrative-services-list.component.js.map