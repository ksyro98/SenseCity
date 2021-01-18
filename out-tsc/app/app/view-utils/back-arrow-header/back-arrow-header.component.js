import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let BackArrowHeaderComponent = class BackArrowHeaderComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    onBackArrowPressed() {
        this.location.back();
    }
};
__decorate([
    Input()
], BackArrowHeaderComponent.prototype, "title", void 0);
BackArrowHeaderComponent = __decorate([
    Component({
        selector: 'app-back-arrow-header',
        templateUrl: './back-arrow-header.component.html',
        styleUrls: ['./back-arrow-header.component.scss'],
    })
], BackArrowHeaderComponent);
export { BackArrowHeaderComponent };
//# sourceMappingURL=back-arrow-header.component.js.map