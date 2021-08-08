import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NeighborhoodComponent = class NeighborhoodComponent {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        this.neighborhoodSegment = 0;
        this.myNeighborhood = 'Η Γειτονιά μου';
        this.neighborhood = 'Γειτονιά';
        this.messages = 'Μηνύματα';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    neighborhoodSegmentChanged(event) {
        this.neighborhoodSegment = event.detail.value;
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'my-neighborhood-caps', callback: (res) => this.myNeighborhood = res });
        this.localTranslateService.pairs.push({ key: 'neighborhood', callback: (res) => this.neighborhood = res });
        this.localTranslateService.pairs.push({ key: 'messages', callback: (res) => this.messages = res });
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