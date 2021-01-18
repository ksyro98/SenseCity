import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MainTabPage = class MainTabPage {
    constructor() {
        this.typeOfService = 0; // 0 --> technical, 1 --> administrative
    }
    ngOnInit() {
    }
    servicesSegmentChanged(event) {
        this.typeOfService = event.detail.value;
    }
};
MainTabPage = __decorate([
    Component({
        selector: 'app-main-tab',
        templateUrl: './main-tab.page.html',
        styleUrls: ['./main-tab.page.scss'],
    })
], MainTabPage);
export { MainTabPage };
//# sourceMappingURL=main-tab.page.js.map