import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ADMINISTRATIVE_SERVICES_LIST } from '../../entities/Service';
let AdministrativeServicesListComponent = class AdministrativeServicesListComponent {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.administrativeServices = ADMINISTRATIVE_SERVICES_LIST;
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
    })
], AdministrativeServicesListComponent);
export { AdministrativeServicesListComponent };
//# sourceMappingURL=administrative-services-list.component.js.map