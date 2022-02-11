import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let WelcomeAlertService = class WelcomeAlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    showAlert(content, callback, cancel) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'city-alert-class',
                header: content.head,
                message: content.body,
                buttons: this.getDialogButtons(callback, cancel)
            });
            yield alert.present();
        });
    }
    getDialogButtons(callback, cancel) {
        const buttonsList = [];
        if (cancel) {
            buttonsList.push({
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'grey-alert-button'
            });
        }
        buttonsList.push({
            text: 'Ok',
            handler: () => callback()
        });
        return buttonsList;
    }
};
WelcomeAlertService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], WelcomeAlertService);
export { WelcomeAlertService };
//# sourceMappingURL=welcome-alert.service.js.map