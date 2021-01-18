import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let StarsComponent = class StarsComponent {
    constructor(router) {
        this.router = router;
        this.selectedStars = -1;
        this.selectedStarsChange = new EventEmitter();
    }
    ngOnInit() { }
    starClicked(which) {
        // if (this.fullScreen) {
        this.selectedStars = which;
        this.selectedStarsChange.emit(which);
        // }
        if (!this.fullScreen) {
            this.router.navigate(['/request-rating'], { queryParams: { stars: which } });
        }
    }
};
__decorate([
    Input()
], StarsComponent.prototype, "fullScreen", void 0);
__decorate([
    Input()
], StarsComponent.prototype, "selectedStars", void 0);
__decorate([
    Output()
], StarsComponent.prototype, "selectedStarsChange", void 0);
StarsComponent = __decorate([
    Component({
        selector: 'app-stars',
        templateUrl: './stars.component.html',
        styleUrls: ['./stars.component.scss'],
    })
], StarsComponent);
export { StarsComponent };
//# sourceMappingURL=stars.component.js.map