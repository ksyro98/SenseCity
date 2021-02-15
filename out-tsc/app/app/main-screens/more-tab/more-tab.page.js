import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CITIES } from '../../constants/Cities';
let MoreTabPage = class MoreTabPage {
    constructor() {
        // We will retrieve this value from the user's selected city.
        this.city = CITIES[4];
    }
    ngOnInit() {
    }
};
MoreTabPage = __decorate([
    Component({
        selector: 'app-more-tab',
        templateUrl: './more-tab.page.html',
        styleUrls: ['./more-tab.page.scss'],
    })
], MoreTabPage);
export { MoreTabPage };
//# sourceMappingURL=more-tab.page.js.map