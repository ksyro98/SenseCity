import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let RecommendationCardComponent = class RecommendationCardComponent {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        this.statusTxt = 'Κατάσταση';
        this.addressTxt = 'Διεύθυνση';
    }
    ngOnInit() {
        this.setTranslationPairs();
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'status', callback: (res) => this.statusTxt = res });
        this.localTranslateService.pairs.push({ key: 'address', callback: (res) => this.addressTxt = res });
    }
};
__decorate([
    Input()
], RecommendationCardComponent.prototype, "recommendation", void 0);
RecommendationCardComponent = __decorate([
    Component({
        selector: 'app-recommendation-card',
        templateUrl: './recommendation-card.component.html',
        styleUrls: ['./recommendation-card.component.scss'],
    })
], RecommendationCardComponent);
export { RecommendationCardComponent };
//# sourceMappingURL=recommendation-card.component.js.map