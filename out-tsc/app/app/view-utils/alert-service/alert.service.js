import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AlertService = class AlertService {
    constructor(alertController, localTranslateService) {
        this.alertController = alertController;
        this.localTranslateService = localTranslateService;
        this.yes = 'Ναι';
        this.no = 'Όχι';
        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
    }
    showAlert(content, callback, negativeAction = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-dialog-class',
                header: content.head,
                message: content.body,
                buttons: [{
                        text: this.no,
                        role: 'cancel',
                        cssClass: negativeAction ? 'grey-alert-button' : ''
                    }, {
                        text: this.yes,
                        cssClass: negativeAction ? 'red-alert-button' : '',
                        handler: () => {
                            callback();
                        }
                    }]
            });
            yield alert.present();
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'yes', callback: (res) => this.yes = res });
        this.localTranslateService.pairs.push({ key: 'no', callback: (res) => this.no = res });
    }
};
AlertService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AlertService);
export { AlertService };
//# sourceMappingURL=alert.service.js.map