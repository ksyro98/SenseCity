var CameraService_1;
import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
const { Camera } = Plugins;
let CameraService = CameraService_1 = class CameraService {
    constructor(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    static takeNewPhoto() {
        return __awaiter(this, void 0, void 0, function* () {
            const capturedPhoto = yield Camera.getPhoto({
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera,
                quality: 40,
            });
            return capturedPhoto.dataUrl;
        });
    }
    static openGallery() {
        return __awaiter(this, void 0, void 0, function* () {
            const galleryPhoto = yield Camera.getPhoto({
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Photos,
                quality: 40
            });
            return galleryPhoto.dataUrl;
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
                            CameraService_1.takeNewPhoto().then(res => callback(res));
                        }
                    }, {
                        text: 'Συλλογή',
                        icon: 'image',
                        cssClass: 'camera-sheet-button',
                        handler: () => {
                            CameraService_1.openGallery().then(res => callback(res));
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
CameraService = CameraService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CameraService);
export { CameraService };
//# sourceMappingURL=camera.service.js.map