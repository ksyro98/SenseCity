import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let TechnicalFormImageComponent = class TechnicalFormImageComponent {
    constructor(actionSheetController, cameraService, localTranslateService) {
        this.actionSheetController = actionSheetController;
        this.cameraService = cameraService;
        this.localTranslateService = localTranslateService;
        this.pathChange = new EventEmitter();
        this.photograph = 'Φωτογραφία';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    addImage() {
        this.cameraService.showCameraActionSheet(res => {
            this.path = res;
            this.pathChange.emit(this.path);
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'photograph', callback: (res) => this.photograph = res });
    }
};
__decorate([
    Input()
], TechnicalFormImageComponent.prototype, "path", void 0);
__decorate([
    Output()
], TechnicalFormImageComponent.prototype, "pathChange", void 0);
__decorate([
    Input()
], TechnicalFormImageComponent.prototype, "defaultImage", void 0);
__decorate([
    Input()
], TechnicalFormImageComponent.prototype, "showHeader", void 0);
__decorate([
    Input()
], TechnicalFormImageComponent.prototype, "imageHeight", void 0);
TechnicalFormImageComponent = __decorate([
    Component({
        selector: 'app-technical-form-image',
        templateUrl: './technical-form-image.component.html',
        styleUrls: ['./technical-form-image.component.scss'],
    })
], TechnicalFormImageComponent);
export { TechnicalFormImageComponent };
//# sourceMappingURL=technical-form-image.component.js.map