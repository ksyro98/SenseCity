import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NeighborhoodComponent = class NeighborhoodComponent {
    constructor() {
        this.neighborhoodSegment = 0;
    }
    ngOnInit() { }
    neighborhoodSegmentChanged(event) {
        this.neighborhoodSegment = event.detail.value;
    }
};
NeighborhoodComponent = __decorate([
    Component({
        selector: 'app-neighborhood',
        templateUrl: './neighborhood.component.html',
        styleUrls: ['./neighborhood.component.scss'],
    })
], NeighborhoodComponent);
export { NeighborhoodComponent };
//# sourceMappingURL=neighborhood.component.js.map