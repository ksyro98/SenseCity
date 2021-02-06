import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let AdministrativeFormSpecificInfoComponent = class AdministrativeFormSpecificInfoComponent {
    constructor(fileChooser, cameraService) {
        this.fileChooser = fileChooser;
        this.cameraService = cameraService;
        this.paths = [];
    }
    ngOnInit() { }
    // NOT WORKING
    addFile() {
        return __awaiter(this, void 0, void 0, function* () {
            this.fileChooser.open();
        });
    }
    addImages() {
        return __awaiter(this, void 0, void 0, function* () {
            this.cameraService.showCameraActionSheet(res => this.paths.push(res));
        });
    }
};
AdministrativeFormSpecificInfoComponent = __decorate([
    Component({
        selector: 'app-administrative-form-specific-info',
        templateUrl: './administrative-form-specific-info.component.html',
        styleUrls: ['./administrative-form-specific-info.component.scss'],
    })
], AdministrativeFormSpecificInfoComponent);
export { AdministrativeFormSpecificInfoComponent };
//# sourceMappingURL=administrative-form-specific-info.component.js.map