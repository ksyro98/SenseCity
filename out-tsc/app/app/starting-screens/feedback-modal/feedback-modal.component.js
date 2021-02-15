var FeedbackModalComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;
let FeedbackModalComponent = FeedbackModalComponent_1 = class FeedbackModalComponent {
    constructor(modalController, storageFeedbackCounter) {
        this.modalController = modalController;
        this.storageFeedbackCounter = storageFeedbackCounter;
    }
    static present(modalController, onDismiss) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield modalController.create({
                component: FeedbackModalComponent_1,
                cssClass: 'feedback-modal-class',
            });
            modal.onDidDismiss()
                .then((data) => onDismiss());
            return yield modal.present();
        });
    }
    ngOnInit() { }
    sendFeedback(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Toast.show({ text: 'Η διαθεση σας καταχωρηθηκε. Ευχαριστουμε!' });
            yield this.modalController.dismiss();
            yield this.storageFeedbackCounter.updateCounter();
        });
    }
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