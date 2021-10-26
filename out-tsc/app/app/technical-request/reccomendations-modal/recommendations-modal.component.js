var RecommendationsModalComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let RecommendationsModalComponent = RecommendationsModalComponent_1 = class RecommendationsModalComponent {
    constructor() { }
    static present(modalController, onDismiss) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield modalController.create({
                component: RecommendationsModalComponent_1,
                cssClass: 'general-modal-class',
            });
            modal.onDidDismiss()
                .then((data) => {
                if (data.data !== null) {
                    onDismiss();
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() { }
};
RecommendationsModalComponent = RecommendationsModalComponent_1 = __decorate([
    Component({
        selector: 'app-recommendations-modal',
        templateUrl: './recommendations-modal.component.html',
        styleUrls: ['./recommendations-modal.component.scss'],
    })
], RecommendationsModalComponent);
export { RecommendationsModalComponent };
//# sourceMappingURL=recommendations-modal.component.js.map