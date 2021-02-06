import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CityAlertService = class CityAlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    showAlert(content, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'city-alert-class',
                header: content.head,
                message: content.body,
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            callback();
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
CityAlertService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CityAlertService);
export { CityAlertService };
//# sourceMappingURL=city-alert.service.js.map