import { __awaiter, __decorate } from "tslib";
import { Component, HostListener, Input } from '@angular/core';
let ConsultationCommentsModalComponent = class ConsultationCommentsModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.userName = 'Κωνσταντινος Συροκωστας';
        this.userComment = '';
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss({
            comments: this.comments
        });
    }
    addComment(comment) {
        // const comment = {
        //   userName: 'Κωνσταντινος Συροκωστας',
        //   text: this.userComment,
        //   replies: [],
        //   timestamp: (new Date()).getTime(),
        //   isReply: false
        // };
        this.comments.splice(0, 0, comment);
        // this.userComment = '';
    }
    setUserComment(value) {
        this.userComment = value;
    }
    overrideHardwareBackAction($event) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dismissModal();
        });
    }
};
__decorate([
    Input()
], ConsultationCommentsModalComponent.prototype, "comments", void 0);
__decorate([
    HostListener('document:ionBackButton', ['$event'])
], ConsultationCommentsModalComponent.prototype, "overrideHardwareBackAction", null);
ConsultationCommentsModalComponent = __decorate([
    Component({
        selector: 'app-consultation-comments-modal',
        templateUrl: './consultation-comments-modal.component.html',
        styleUrls: ['./consultation-comments-modal.component.scss'],
    })
], ConsultationCommentsModalComponent);
export { ConsultationCommentsModalComponent };
//# sourceMappingURL=consultation-comments-modal.component.js.map