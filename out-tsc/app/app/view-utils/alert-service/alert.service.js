import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AlertService = class AlertService {
    constructor(alertController, localTranslateService) {
        this.alertController = alertController;
        this.localTranslateService = localTranslateService;
        this.yes = 'Ναι';
        this.no = 'Όχι';
        this.ok = 'Ok';
        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
    }
    show(content, callback, negativeAction = false, onlyOk = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-dialog-class',
                header: content.head,
                message: content.body,
                buttons: this.getButtons(onlyOk, negativeAction, callback)
            });
            yield alert.present();
        });
    }
    getButtons(onlyOk, negativeAction, callback) {
        const buttons = [];
        if (!onlyOk) {
            buttons.push({
                text: this.no,
                role: 'cancel',
                cssClass: negativeAction ? 'grey-alert-button' : ''
            });
        }
        buttons.push({
            text: onlyOk ? this.ok : this.yes,
            cssClass: negativeAction ? 'red-alert-button' : '',
            handler: () => {
                callback();
            }
        });
        return buttons;
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