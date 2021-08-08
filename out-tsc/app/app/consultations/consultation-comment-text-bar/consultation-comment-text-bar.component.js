import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
let ConsultationCommentTextBarComponent = class ConsultationCommentTextBarComponent {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        this.userComment = '';
        this.commentEmitter = new EventEmitter();
        this.commentText = 'Σχόλιο';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    addComment() {
        const comment = {
            userName: this.userName,
            text: this.userComment,
            replies: [],
            timestamp: (new Date()).getTime(),
            isReply: this.isReply
        };
        this.userComment = '';
        this.commentEmitter.emit(comment);
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'comment', callback: (res) => this.commentText = res });
    }
};
__decorate([
    Input()
], ConsultationCommentTextBarComponent.prototype, "userName", void 0);
__decorate([
    Input()
], ConsultationCommentTextBarComponent.prototype, "isReply", void 0);
__decorate([
    Output()
], ConsultationCommentTextBarComponent.prototype, "commentEmitter", void 0);
ConsultationCommentTextBarComponent = __decorate([
    Component({
        selector: 'app-consultation-comment-text-bar',
        templateUrl: './consultation-comment-text-bar.component.html',
        styleUrls: ['./consultation-comment-text-bar.component.scss'],
    })
], ConsultationCommentTextBarComponent);
export { ConsultationCommentTextBarComponent };
//# sourceMappingURL=consultation-comment-text-bar.component.js.map