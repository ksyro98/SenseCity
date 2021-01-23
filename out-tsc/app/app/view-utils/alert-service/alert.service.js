import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    showAlert(content, callback, negativeAction = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-dialog-class',
                header: content.head,
                message: content.body,
                buttons: [{
                        text: 'Οχι',
                        role: 'cancel',
                        cssClass: negativeAction ? 'grey-alert-button' : ''
                    }, {
                        text: 'Ναι',
                        cssClass: negativeAction ? 'red-alert-button' : '',
                        handler: () => {
                            callback();
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
AlertService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AlertService);
export { AlertService };
//# sourceMappingURL=alert.service.js.map