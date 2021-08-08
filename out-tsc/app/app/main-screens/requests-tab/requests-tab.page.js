import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RequestsTabPage = class RequestsTabPage {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        this.completedRequests = 0; // 0 --> not completed, 1 --> completed
        this.inProgress = 'Σε εξέλειξη';
        this.completed = 'Ολοκληρωμένες';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    requestsSegmentChanged(event) {
        this.completedRequests = event.detail.value;
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'in-progress', callback: (res) => this.inProgress = res });
        this.localTranslateService.pairs.push({ key: 'completed', callback: (res) => this.completed = res });
    }
};
RequestsTabPage = __decorate([
    Component({
        selector: 'app-requests-tab',
        templateUrl: './requests-tab.page.html',
        styleUrls: ['./requests-tab.page.scss'],
    })
], RequestsTabPage);
export { RequestsTabPage };
//# sourceMappingURL=requests-tab.page.js.map