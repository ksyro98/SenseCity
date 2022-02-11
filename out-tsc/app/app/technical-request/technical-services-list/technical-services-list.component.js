import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { TECHNICAL_SERVICES_LIST } from '../../entities/Service';
let TechnicalServicesListComponent = class TechnicalServicesListComponent {
    constructor(localTranslateService) {
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
            this.technicalServices = TECHNICAL_SERVICES_LIST;
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
    })
], TechnicalServicesListComponent);
export { TechnicalServicesListComponent };
//# sourceMappingURL=technical-services-list.component.js.map