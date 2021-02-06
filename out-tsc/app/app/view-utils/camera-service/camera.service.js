import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
let CameraService = class CameraService {
    constructor(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    takeNewPhoto() {
        return __awaiter(this, void 0, void 0, function* () {
            const capturedPhoto = yield Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: CameraSource.Camera,
                quality: 100
            });
            return capturedPhoto.webPath;
        });
    }
    openGallery() {
        return __awaiter(this, void 0, void 0, function* () {
            const galleryPhoto = yield Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: CameraSource.Photos,
                quality: 100
            });
            return galleryPhoto.webPath;
        });
    }
    showCameraActionSheet(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Εισαγωγή φωτογραφίας',
                cssClass: 'camera-sheet-class',
                buttons: [{
                        text: 'Κάμερα',
                        icon: 'camera',
                        cssClass: 'camera-sheet-button',
                        handler: () => {
                            this.takeNewPhoto()
                                .then(res => callback(res));
                        }
                    }, {
                        text: 'Συλλογή',
                        icon: 'image',
                        cssClass: 'camera-sheet-button',
                        handler: () => {
                            this.openGallery()
                                .then(res => callback(res));
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
CameraService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CameraService);
export { CameraService };
//# sourceMappingURL=camera.service.js.map