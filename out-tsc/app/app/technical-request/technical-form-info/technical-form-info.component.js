import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
let TechnicalFormInfoComponent = class TechnicalFormInfoComponent {
    constructor(actionSheetController, localTranslateService) {
        this.actionSheetController = actionSheetController;
        this.localTranslateService = localTranslateService;
        this.details = 'Πληροφορίες';
        this.additionalDescription = 'Επιπλέον Παρατηρήσεις';
        this.comments = 'Σχόλια';
        this.imagePathChange = new EventEmitter();
        this.userCommentsChange = new EventEmitter();
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'details', callback: (res) => this.details = res });
        this.localTranslateService.pairs.push({ key: 'additional-description', callback: (res) => this.additionalDescription = res });
        this.localTranslateService.pairs.push({ key: 'comments', callback: (res) => this.comments = res });
    }
    onCommentChange() {
        this.userCommentsChange.emit(this.userComments);
    }
};
__decorate([
    Input()
], TechnicalFormInfoComponent.prototype, "imagePath", void 0);
__decorate([
    Output()
], TechnicalFormInfoComponent.prototype, "imagePathChange", void 0);
__decorate([
    Input()
], TechnicalFormInfoComponent.prototype, "userComments", void 0);
__decorate([
    Output()
], TechnicalFormInfoComponent.prototype, "userCommentsChange", void 0);
TechnicalFormInfoComponent = __decorate([
    Component({
        selector: 'app-technical-form-info',
        templateUrl: './technical-form-info.component.html',
        styleUrls: ['./technical-form-info.component.scss'],
    })
], TechnicalFormInfoComponent);
export { TechnicalFormInfoComponent };
//# sourceMappingURL=technical-form-info.component.js.map