import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { TechnicalRequest } from '../../../entities/TechnicalRequest';
let RecommendationCardComponent = class RecommendationCardComponent {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        this.statusTxt = 'Κατάσταση';
        this.addressTxt = 'Διεύθυνση';
        this.inProgressTxt = 'Σε Εξέλειξη';
        this.confirmedTxt = 'Επιβεβαιώθηκε';
        this.resolvedTxt = 'Επιλύθηκε';
        this.unknownTxt = 'Άγνωστο';
    }
    ngOnInit() {
        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
    }
    getStatusText(status) {
        switch (status) {
            case TechnicalRequest.IN_PROGRESS:
                return this.inProgressTxt;
            case TechnicalRequest.CONFIRMED:
                return this.confirmedTxt;
            case TechnicalRequest.RESOLVED:
                return this.resolvedTxt;
        }
        return this.unknownTxt;
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'status', callback: (res) => this.statusTxt = res });
        this.localTranslateService.pairs.push({ key: 'address', callback: (res) => this.addressTxt = res });
        this.localTranslateService.pairs.push({ key: 'in-progress-lc', callback: (res) => this.inProgressTxt = res });
        this.localTranslateService.pairs.push({ key: 'confirmed', callback: (res) => this.confirmedTxt = res });
        this.localTranslateService.pairs.push({ key: 'resolved', callback: (res) => this.resolvedTxt = res });
        this.localTranslateService.pairs.push({ key: 'unknown', callback: (res) => this.unknownTxt = res });
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