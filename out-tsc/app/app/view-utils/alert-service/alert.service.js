import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    showAlert(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-dialog-class',
                header: 'Ολοκλήρωση Αίτησης',
                message: 'Είσαι σίγουρος ότι θέλεις να στείλεις αυτή την αίτηση;',
                buttons: [{
                        text: 'Οχι',
                        role: 'cancel',
                    }, {
                        text: 'Ναι',
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