import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MoreCardComponent = class MoreCardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigate() {
        this.router.navigate([this.routeTarget]);
    }
};
__decorate([
    Input()
], MoreCardComponent.prototype, "image", void 0);
__decorate([
    Input()
], MoreCardComponent.prototype, "title", void 0);
__decorate([
    Input()
], MoreCardComponent.prototype, "routeTarget", void 0);
MoreCardComponent = __decorate([
    Component({
        selector: 'app-more-card',
        templateUrl: './more-card.component.html',
        styleUrls: ['./more-card.component.scss'],
    })
], MoreCardComponent);
export { MoreCardComponent };
//# sourceMappingURL=more-card.component.js.map