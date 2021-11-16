import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let RequestsListComponent = class RequestsListComponent {
    constructor(logic, localTranslateService) {
        this.logic = logic;
        this.localTranslateService = localTranslateService;
        this.noRequestsTxt1 = 'There are no ';
        this.completedTxt = 'completed';
        this.activeTxt = 'active';
        this.noRequestsTxt2 = ' requests';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.requests$ = this.completed ? this.logic.getCompletedIssues() : this.logic.getActiveIssues();
        this.localTranslateService.translateLanguage();
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'no-requests-1', callback: (res) => this.noRequestsTxt1 = res });
        this.localTranslateService.pairs.push({ key: 'no-requests-2', callback: (res) => this.noRequestsTxt2 = res });
        this.localTranslateService.pairs.push({ key: 'completed-lc', callback: (res) => this.completedTxt = res });
        this.localTranslateService.pairs.push({ key: 'active', callback: (res) => this.activeTxt = res });
    }
};
__decorate([
    Input()
], RequestsListComponent.prototype, "completed", void 0);
RequestsListComponent = __decorate([
    Component({
        selector: 'app-requests-list',
        templateUrl: './requests-list.component.html',
        styleUrls: ['./requests-list.component.scss'],
    })
], RequestsListComponent);
export { RequestsListComponent };
//# sourceMappingURL=requests-list.component.js.map