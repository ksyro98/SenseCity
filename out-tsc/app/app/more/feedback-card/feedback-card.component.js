import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Mood } from '../../entities/Mood';
const { Toast, Geolocation } = Plugins;
let FeedbackCardComponent = class FeedbackCardComponent {
    constructor(storageFeedbackCounter, localTranslateService, networkUtils) {
        this.storageFeedbackCounter = storageFeedbackCounter;
        this.localTranslateService = localTranslateService;
        this.networkUtils = networkUtils;
        this.feedbackReceived = false;
        this.buttonsEnabled = true;
        this.moodStoredTxt = 'Η διάθεση σας καταχωρήθηκε. Ευχαριστούμε!';
        this.locationRequiredTxt = 'Τα δεδομένα τοποθεσίας είναι απαραίτητα για αυτή τη λειτουργία.';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    sendFeedback(value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.buttonsEnabled) {
                return;
            }
            this.buttonsEnabled = false;
            Geolocation.getCurrentPosition()
                .then(res => {
                const location = {
                    type: 'Point', coordinates: [res.coords.longitude, res.coords.latitude]
                };
                const mood = new Mood(value);
                this.networkUtils.setFeeling(mood, location).subscribe((x) => {
                    Toast.show({ text: this.moodStoredTxt });
                    this.feedbackReceived = true;
                    this.buttonsEnabled = true;
                    this.storageFeedbackCounter.updateCounter();
                });
            })
                .catch(reason => {
                Toast.show({
                    text: this.locationRequiredTxt,
                    duration: 'long'
                });
                console.log(reason);
                this.buttonsEnabled = true;
            });
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'express-mood', callback: (res) => this.expressMoodTitle = res });
        this.localTranslateService.pairs.push({ key: 'mood-stored', callback: (res) => this.moodStoredTxt = res });
        this.localTranslateService.pairs.push({ key: 'location-required', callback: (res) => this.locationRequiredTxt = res });
    }
};
FeedbackCardComponent = __decorate([
    Component({
        selector: 'app-feedback-card',
        templateUrl: './feedback-card.component.html',
        styleUrls: ['./feedback-card.component.scss'],
    })
], FeedbackCardComponent);
export { FeedbackCardComponent };
//# sourceMappingURL=feedback-card.component.js.map