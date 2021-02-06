import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TechnicalFormImageComponent = class TechnicalFormImageComponent {
    constructor(actionSheetController, cameraService) {
        this.actionSheetController = actionSheetController;
        this.cameraService = cameraService;
        this.path = '';
    }
    ngOnInit() { }
    addImage() {
        this.cameraService.showCameraActionSheet(res => this.path = res);
    }
};
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