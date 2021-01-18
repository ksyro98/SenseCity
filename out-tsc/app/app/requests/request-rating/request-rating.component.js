import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RequestRatingComponent = class RequestRatingComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.stars = -1;
    }
    ngOnInit() {
        this.router.queryParams.subscribe(params => this.stars = Number(params.stars));
    }
    back() {
        this.location.back();
    }
};
RequestRatingComponent = __decorate([
    Component({
        selector: 'app-request-rating',
        templateUrl: './request-rating.component.html',
        styleUrls: ['./request-rating.component.scss'],
    })
], RequestRatingComponent);
export { RequestRatingComponent };
//# sourceMappingURL=request-rating.component.js.map