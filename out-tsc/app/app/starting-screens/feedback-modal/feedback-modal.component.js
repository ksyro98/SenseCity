var FeedbackModalComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Mood } from '../../entities/Mood';
const { Toast } = Plugins;
let FeedbackModalComponent = FeedbackModalComponent_1 = class FeedbackModalComponent {
    constructor(modalController, storageFeedbackCounter, networkUtils, localTranslateService) {
        this.modalController = modalController;
        this.storageFeedbackCounter = storageFeedbackCounter;
        this.networkUtils = networkUtils;
        this.localTranslateService = localTranslateService;
        this.moodTitleTxt = 'Πόσο ευχαριστημένος είσαι από την περιοχή σου;';
        this.moodStoredTxt = 'Η διάθεση σας καταχωρήθηκε. Ευχαριστούμε!';
    }
    static present(modalController, currentLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield modalController.create({
                component: FeedbackModalComponent_1,
                cssClass: 'feedback-modal-class',
                componentProps: {
                    location: currentLocation,
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
    }
    sendFeedback(value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.networkUtils.setFeeling(new Mood(value), this.location).subscribe((_) => {
                Toast.show({ text: this.moodStoredTxt });
            });
            yield Promise.all([this.modalController.dismiss(), this.storageFeedbackCounter.updateCounter()]);
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'express-mood', callback: (res) => this.moodTitleTxt = res });
        this.localTranslateService.pairs.push({ key: 'mood-stored', callback: (res) => this.moodStoredTxt = res });
    }
};
__decorate([
    Input()
], FeedbackModalComponent.prototype, "location", void 0);
FeedbackModalComponent = FeedbackModalComponent_1 = __decorate([
    Component({
        selector: 'app-feedback-modal',
        templateUrl: './feedback-modal.component.html',
        styleUrls: ['./feedback-modal.component.scss'],
    })
], FeedbackModalComponent);
export { FeedbackModalComponent };
//# sourceMappingURL=feedback-modal.component.js.map