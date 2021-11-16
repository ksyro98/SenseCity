import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { TechnicalRequest } from '../../entities/TechnicalRequest';
let RequestCardComponent = class RequestCardComponent {
    constructor(router, localTranslateService) {
        this.router = router;
        this.localTranslateService = localTranslateService;
        this.selectedStars = -1;
        this.inProgressTxt = 'Σε Εξέλειξη';
        this.confirmedTxt = 'Επιβεβαιώθηκε';
        this.resolvedTxt = 'Επιλύθηκε';
        this.unknownTxt = 'Άγνωστο';
        this.setTranslationPairs();
    }
    ngOnInit() {
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
    areStarsPressed() {
        return !(this.selectedStars === -1);
    }
    navigateToDetailsScreen() {
        if (this.areStarsPressed()) {
            this.selectedStars = -1;
            return;
        }
        this.router.navigate(['/request-details'], { queryParams: { alias: this.request.alias, completed: this.completed } });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'in-progress-lc', callback: (res) => this.inProgressTxt = res });
        this.localTranslateService.pairs.push({ key: 'confirmed', callback: (res) => this.confirmedTxt = res });
        this.localTranslateService.pairs.push({ key: 'resolved', callback: (res) => this.resolvedTxt = res });
        this.localTranslateService.pairs.push({ key: 'unknown', callback: (res) => this.unknownTxt = res });
    }
};
__decorate([
    Input()
], RequestCardComponent.prototype, "isLast", void 0);
__decorate([
    Input()
], RequestCardComponent.prototype, "completed", void 0);
__decorate([
    Input()
], RequestCardComponent.prototype, "request", void 0);
RequestCardComponent = __decorate([
    Component({
        selector: 'app-request-card',
        templateUrl: './request-card.component.html',
        styleUrls: ['./request-card.component.scss'],
    })
], RequestCardComponent);
export { RequestCardComponent };
//# sourceMappingURL=request-card.component.js.map