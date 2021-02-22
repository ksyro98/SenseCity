import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let AdministrativeFormSpecificInfoComponent = class AdministrativeFormSpecificInfoComponent {
    constructor(fileChooser, filePath, cameraService) {
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.cameraService = cameraService;
        this.paths = [];
        this.selectedFile = 'Προσθηκη Αρχειου';
    }
    ngOnInit() { }
    // NOT WORKING
    addFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = yield this.fileChooser.open();
            const path = yield this.filePath.resolveNativePath(uri);
            this.selectedFile = path.substr(path.lastIndexOf('/') + 1);
        });
    }
    addImages() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cameraService.showCameraActionSheet(res => this.paths.push(res));
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