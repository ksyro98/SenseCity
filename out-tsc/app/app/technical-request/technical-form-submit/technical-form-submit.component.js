import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getShortString } from '../../utils/string-utils';
let TechnicalFormSubmitComponent = class TechnicalFormSubmitComponent {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        this.submit = 'Υποβολή';
        this.category = 'Κατηγορία';
        this.cleaning = 'Καθαριότητα';
        this.request = 'Αίτημα';
        this.cutBranches = 'Κομμένα Κλαδιά';
        this.comments = 'Σχόλια';
        this.commentsValue = 'Architecto commodi quod non...';
        this.namedRequest = 'Επώνυμη αναφορά';
        this.acceptTerms1 = 'Αποδέχομαι τους ';
        this.acceptTerms2 = 'όρους χρήσης';
        this.acceptTerms3 = ' του SenseCity.';
        this.imageChange = new EventEmitter();
        this.namedClickedChange = new EventEmitter();
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    getUserComments() {
        return getShortString(this.finalRequest.comments, 40);
    }
    onNamedClickChanged() {
        this.namedClickedChange.emit(this.namedClicked);
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'submit', callback: (res) => this.submit = res });
        this.localTranslateService.pairs.push({ key: 'category', callback: (res) => this.category = res });
        this.localTranslateService.pairs.push({ key: '_cleaning-text', callback: (res) => this.cleaning = res });
        this.localTranslateService.pairs.push({ key: 'request', callback: (res) => this.request = res });
        this.localTranslateService.pairs.push({ key: 'cut-branches', callback: (res) => this.cutBranches = res });
        this.localTranslateService.pairs.push({ key: 'comments', callback: (res) => this.comments = res });
        this.localTranslateService.pairs.push({ key: '_comments-value', callback: (res) => this.commentsValue = res });
        this.localTranslateService.pairs.push({ key: 'named-request', callback: (res) => this.namedRequest = res });
        this.localTranslateService.pairs.push({ key: 'accept-terms-1', callback: (res) => this.acceptTerms1 = res });
        this.localTranslateService.pairs.push({ key: 'accept-terms-2', callback: (res) => this.acceptTerms2 = res });
        this.localTranslateService.pairs.push({ key: 'accept-terms-3', callback: (res) => this.acceptTerms3 = res });
    }
};
__decorate([
    Input()
], TechnicalFormSubmitComponent.prototype, "finalRequest", void 0);
__decorate([
    Input()
], TechnicalFormSubmitComponent.prototype, "namedClicked", void 0);
__decorate([
    Output()
], TechnicalFormSubmitComponent.prototype, "imageChange", void 0);
__decorate([
    Output()
], TechnicalFormSubmitComponent.prototype, "namedClickedChange", void 0);
TechnicalFormSubmitComponent = __decorate([
    Component({
        selector: 'app-technical-form-submit',
        templateUrl: './technical-form-submit.component.html',
        styleUrls: ['./technical-form-submit.component.scss'],
    })
], TechnicalFormSubmitComponent);
export { TechnicalFormSubmitComponent };
//# sourceMappingURL=technical-form-submit.component.js.map