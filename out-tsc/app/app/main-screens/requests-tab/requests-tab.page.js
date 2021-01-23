import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RequestsTabPage = class RequestsTabPage {
    constructor() {
        this.completedRequests = 0; // 0 --> not completed, 1 --> completed
    }
    ngOnInit() {
    }
    requestsSegmentChanged(event) {
        this.completedRequests = event.detail.value;
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