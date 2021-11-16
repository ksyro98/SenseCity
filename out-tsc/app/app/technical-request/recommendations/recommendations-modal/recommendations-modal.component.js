var RecommendationsModalComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Subscriber } from 'rxjs';
let RecommendationsModalComponent = RecommendationsModalComponent_1 = class RecommendationsModalComponent {
    constructor(modalController, networkUtils, userService, localTranslateService) {
        this.modalController = modalController;
        this.networkUtils = networkUtils;
        this.userService = userService;
        this.localTranslateService = localTranslateService;
        this.loading = false;
        this.recommendationsTxt = 'Προτάσεις';
        this.otherRequestsTxt = 'Μήπως εννοείς ένα από τα παρακάτω αιτήματα;';
        this.noTxt = 'Όχι';
    }
    static present(modalController, recommendationsList, onDismiss) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield modalController.create({
                component: RecommendationsModalComponent_1,
                cssClass: 'general-modal-class',
                componentProps: {
                    recommendations: recommendationsList,
                }
            });
            modal.onDidDismiss()
                .then((data) => {
                if (data.data !== null) {
                    onDismiss(data.data);
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
    }
    cardClicked(recommendation) {
        if (!recommendation) {
            this.modalController.dismiss(undefined);
            return;
        }
        this.loading = true;
        this.networkUtils.subscribeToIssue(recommendation.id, this.userService.getUser())
            .subscribe(new Subscriber({
            next: _ => this.modalController.dismiss(recommendation),
            error: error => {
                console.log(error);
                this.modalController.dismiss(null);
            }
        }));
    }
    goBack() {
        this.cardClicked(undefined);
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'recommendations', callback: (res) => this.recommendationsTxt = res });
        this.localTranslateService.pairs.push({ key: 'other-requests', callback: (res) => this.otherRequestsTxt = res });
        this.localTranslateService.pairs.push({ key: 'no', callback: (res) => this.noTxt = res });
    }
};
__decorate([
    Input()
], RecommendationsModalComponent.prototype, "recommendations", void 0);
RecommendationsModalComponent = RecommendationsModalComponent_1 = __decorate([
    Component({
        selector: 'app-recommendations-modal',
        templateUrl: './recommendations-modal.component.html',
        styleUrls: ['./recommendations-modal.component.scss'],
    })
], RecommendationsModalComponent);
export { RecommendationsModalComponent };
//# sourceMappingURL=recommendations-modal.component.js.map