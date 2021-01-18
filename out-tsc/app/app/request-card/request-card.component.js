import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let RequestCardComponent = class RequestCardComponent {
    constructor() { }
    ngOnInit() { }
    navigateToDetails() {
    }
};
__decorate([
    Input()
], RequestCardComponent.prototype, "isLast", void 0);
__decorate([
    Input()
], RequestCardComponent.prototype, "completed", void 0);
RequestCardComponent = __decorate([
    Component({
        selector: 'app-request-card',
        templateUrl: './request-card.component.html',
        styleUrls: ['./request-card.component.scss'],
    })
], RequestCardComponent);
export { RequestCardComponent };
//# sourceMappingURL=request-card.component.js.map