import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TechnicalFormInfoComponent = class TechnicalFormInfoComponent {
    constructor(actionSheetController, localTranslateService) {
        this.actionSheetController = actionSheetController;
        this.localTranslateService = localTranslateService;
        this.details = 'Πληροφορίες';
        this.additionalDescription = 'Επιπλέον Παρατηρήσεις';
        this.comments = 'Σχόλια';
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
};
TechnicalFormInfoComponent = __decorate([
    Component({
        selector: 'app-technical-form-info',
        templateUrl: './technical-form-info.component.html',
        styleUrls: ['./technical-form-info.component.scss'],
    })
], TechnicalFormInfoComponent);
export { TechnicalFormInfoComponent };
//# sourceMappingURL=technical-form-info.component.js.map