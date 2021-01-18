import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TechnicalFormImageComponent = class TechnicalFormImageComponent {
    constructor(actionSheetController, cameraService) {
        this.actionSheetController = actionSheetController;
        this.cameraService = cameraService;
        this.path = '';
    }
    ngOnInit() { }
    showCameraActionSheet() {
        return __awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Εισαγωγή φωτογραφίας',
                cssClass: 'camera-sheet-class',
                buttons: [{
                        text: 'Κάμερα',
                        icon: 'camera',
                        cssClass: 'camera-sheet-button',
                        handler: () => {
                            this.cameraService.takeNewPhoto()
                                .then(res => this.path = res);
                        }
                    }, {
                        text: 'Συλλογή',
                        icon: 'image',
                        cssClass: 'camera-sheet-button',
                        handler: () => {
                            this.cameraService.openGallery()
                                .then(res => this.path = res);
                        }
                    }]
            });
            yield actionSheet.present();
        });
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