import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ConsultationCommentRepliesModalComponent } from '../consultation-comment-replies-modal/consultation-comment-replies-modal.component';
let ConsultationCommentCardComponent = class ConsultationCommentCardComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.clickDisabled = false;
        this.hideRepliesText = false;
    }
    ngOnInit() { }
    presentRepliesModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ConsultationCommentRepliesModalComponent,
                cssClass: 'general-modal-class',
                componentProps: {
                    comment: this.comment
                }
            });
            modal.onDidDismiss().then((res) => {
                this.comment = res.data.comment;
            });
            return yield modal.present();
        });
    }
};
__decorate([
    Input()
], ConsultationCommentCardComponent.prototype, "comment", void 0);
__decorate([
    Input()
], ConsultationCommentCardComponent.prototype, "clickDisabled", void 0);
__decorate([
    Input()
], ConsultationCommentCardComponent.prototype, "hideRepliesText", void 0);
ConsultationCommentCardComponent = __decorate([
    Component({
        selector: 'app-consultation-comment-card',
        templateUrl: './consultation-comment-card.component.html',
        styleUrls: ['./consultation-comment-card.component.scss'],
    })
], ConsultationCommentCardComponent);
export { ConsultationCommentCardComponent };
//# sourceMappingURL=consultation-comment-card.component.js.map