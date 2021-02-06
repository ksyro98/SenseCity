var FeedbackModalComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let FeedbackModalComponent = FeedbackModalComponent_1 = class FeedbackModalComponent {
    static present(modalController, onDismiss) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield modalController.create({
                component: FeedbackModalComponent_1,
                cssClass: 'feedback-modal-class',
            });
            modal.onDidDismiss()
                .then((data) => {
            });
            return yield modal.present();
        });
    }
    constructor() { }
    ngOnInit() { }
};
FeedbackModalComponent = FeedbackModalComponent_1 = __decorate([
    Component({
        selector: 'app-feedback-modal',
        templateUrl: './feedback-modal.component.html',
        styleUrls: ['./feedback-modal.component.scss'],
    })
], FeedbackModalComponent);
export { FeedbackModalComponent };
//# sourceMappingURL=feedback-modal.component.js.map