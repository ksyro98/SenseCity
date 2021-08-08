import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RequestRatingComponent = class RequestRatingComponent {
    constructor(location, router, localTranslateService) {
        this.location = location;
        this.router = router;
        this.localTranslateService = localTranslateService;
        this.stars = -1;
        this.type = 'Καθαριότητα';
        this.subtype = 'Κομμένα Κλαδιά';
        this.wasRequestCompleted = 'Ολοκληρώθηκε το αίτημα σας;';
        this.yes = 'Ναι';
        this.no = 'Όχι';
        this.commentsPlaceholder = 'Σχόλια (προαιρετικό)';
        this.submit = 'Υποβολή';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.router.queryParams.subscribe(params => this.stars = Number(params.stars));
        this.localTranslateService.translateLanguage();
    }
    back() {
        this.location.back();
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: '_type-rrs', callback: (res) => this.type = res });
        this.localTranslateService.pairs.push({ key: '_subtype-rrs', callback: (res) => this.subtype = res });
        this.localTranslateService.pairs.push({ key: 'was-request-completed-rrs', callback: (res) => this.wasRequestCompleted = res });
        this.localTranslateService.pairs.push({ key: 'yes-rrs', callback: (res) => this.yes = res });
        this.localTranslateService.pairs.push({ key: 'no-rrs', callback: (res) => this.no = res });
        this.localTranslateService.pairs.push({ key: 'comments-placeholder-rrs', callback: (res) => this.commentsPlaceholder = res });
        this.localTranslateService.pairs.push({ key: 'submit-rrs', callback: (res) => this.submit = res });
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