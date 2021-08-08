import { __awaiter, __decorate } from "tslib";
import { Component, HostListener, Input } from '@angular/core';
let ConsultationCommentRepliesModalComponent = class ConsultationCommentRepliesModalComponent {
    constructor(modalController, localTranslateService) {
        this.modalController = modalController;
        this.localTranslateService = localTranslateService;
        this.userName = 'Κωνσταντινος Συροκωστας';
        this.replies = 'Απαντήσεις';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    addComment(comment) {
        this.comment.replies.push(comment);
    }
    onBackPressed() {
        this.modalController.dismiss({ comment: this.comment });
    }
    overrideHardwareBackAction($event) {
        return __awaiter(this, void 0, void 0, function* () {
            this.onBackPressed();
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'replies', callback: (res) => this.replies = res });
    }
};
__decorate([
    Input()
], ConsultationCommentRepliesModalComponent.prototype, "comment", void 0);
__decorate([
    HostListener('document:ionBackButton', ['$event'])
], ConsultationCommentRepliesModalComponent.prototype, "overrideHardwareBackAction", null);
ConsultationCommentRepliesModalComponent = __decorate([
    Component({
        selector: 'app-consultation-comment-replies-modal',
        templateUrl: './consultation-comment-replies-modal.component.html',
        styleUrls: ['./consultation-comment-replies-modal.component.scss'],
    })
], ConsultationCommentRepliesModalComponent);
export { ConsultationCommentRepliesModalComponent };
//# sourceMappingURL=consultation-comment-replies-modal.component.js.map