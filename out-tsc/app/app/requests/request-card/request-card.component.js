import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let RequestCardComponent = class RequestCardComponent {
    constructor(router, localTranslateService) {
        this.router = router;
        this.localTranslateService = localTranslateService;
        this.selectedStars = -1;
        this.text1 = 'Το αίτημα σας (';
        this.text2 = ') με κωδικό #';
        this.text3 = 'είναι σε εξέλειξη';
        this.text4 = ' ολοκληρώθηκε.';
        this.status = 'Κατάσταση: ';
        this.value1 = 'Καθαριότητα';
        this.value2 = '47123';
        this.value3 = 'Επιβεβαιωμένο';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
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
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'text-request-card-1', callback: (res) => this.text1 = res });
        this.localTranslateService.pairs.push({ key: 'text-request-card-2', callback: (res) => this.text2 = res });
        this.localTranslateService.pairs.push({ key: 'text-request-card-3', callback: (res) => this.text3 = res });
        this.localTranslateService.pairs.push({ key: 'text-request-card-4', callback: (res) => this.text4 = res });
        this.localTranslateService.pairs.push({ key: 'status-request-card', callback: (res) => this.status = res });
        this.localTranslateService.pairs.push({ key: '_value-request-card-1', callback: (res) => this.value1 = res });
        this.localTranslateService.pairs.push({ key: '_value-request-card-2', callback: (res) => this.value2 = res });
        this.localTranslateService.pairs.push({ key: '_value-request-card-3', callback: (res) => this.value3 = res });
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