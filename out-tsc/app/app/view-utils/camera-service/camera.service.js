import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
let CameraService = class CameraService {
    constructor() { }
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
};
CameraService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CameraService);
export { CameraService };
//# sourceMappingURL=camera.service.js.map