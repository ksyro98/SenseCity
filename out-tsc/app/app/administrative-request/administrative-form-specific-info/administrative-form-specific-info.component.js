import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let AdministrativeFormSpecificInfoComponent = class AdministrativeFormSpecificInfoComponent {
    constructor(fileChooser, 
    // private filePath: FilePath,
    cameraService, localTranslateService) {
        this.fileChooser = fileChooser;
        this.cameraService = cameraService;
        this.localTranslateService = localTranslateService;
        this.paths = [];
        this.selectedFile = 'Προσθήκη Αρχείου';
        this.informationLabel = 'Πληροφορία';
        this.textInformationDesc = 'Περιγραφή πληροφορίας';
        this.textLabel = 'κείμενο';
        this.fileLabel = 'αρχείο';
        this.photoLabel = 'φωτογραφία';
        this.photoDesc = 'Προσθήκη Φωτογραφιών';
        this.specificInformation = 'Εξειδικευμένες πληροφορίες';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    // NOT WORKING
    addFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = yield this.fileChooser.open();
        });
    }
    addImages() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cameraService.showCameraActionSheet(res => this.paths.push(res));
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'selected-file', callback: (res) => this.selectedFile = res });
        this.localTranslateService.pairs.push({ key: '_information-label', callback: (res) => this.informationLabel = res });
        this.localTranslateService.pairs.push({ key: '_text-information-desc', callback: (res) => this.textInformationDesc = res });
        this.localTranslateService.pairs.push({ key: 'text-label', callback: (res) => this.textLabel = res });
        this.localTranslateService.pairs.push({ key: 'file-label', callback: (res) => this.fileLabel = res });
        this.localTranslateService.pairs.push({ key: 'photo-label', callback: (res) => this.photoLabel = res });
        this.localTranslateService.pairs.push({ key: '_photo-desc', callback: (res) => this.photoDesc = res });
        this.localTranslateService.pairs.push({ key: 'specific-information', callback: (res) => this.specificInformation = res });
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