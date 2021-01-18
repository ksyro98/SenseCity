import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let RequestCardComponent = class RequestCardComponent {
    constructor(router) {
        this.router = router;
        this.selectedStars = -1;
    }
    ngOnInit() { }
    areStarsPressed() {
        return !(this.selectedStars === -1);
    }
    navigateToDetailsScreen() {
        if (this.areStarsPressed()) {
            this.selectedStars = -1;
            return;
        }
        this.router.navigate(['/request-details'], { queryParams: { completed: this.completed } });
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