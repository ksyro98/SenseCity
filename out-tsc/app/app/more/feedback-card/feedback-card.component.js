import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Toast, Geolocation } = Plugins;
let FeedbackCardComponent = class FeedbackCardComponent {
    constructor() {
        this.feedbackReceived = false;
        this.buttonsEnabled = true;
    }
    ngOnInit() { }
    sendFeedback(value) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.buttonsEnabled);
            if (!this.buttonsEnabled) {
                return;
            }
            this.buttonsEnabled = false;
            Geolocation.getCurrentPosition()
                .then(res => {
                const lat = res.coords.latitude;
                const long = res.coords.longitude;
                Toast.show({ text: 'Η διαθεση σας καταχωρηθηκε. Ευχαριστουμε!' });
                this.feedbackReceived = true;
                this.buttonsEnabled = true;
            })
                .catch(reason => {
                Toast.show({
                    text: 'Δυστυχως υπηρξε ενα προβλμα ενω καταχωρουσαμε τη διαθεση σας.' +
                        ' Παρακαλουμε σιγουρευτειτε οτι η τοποθεσια στο κινητο σας ειναι ενεργοποιημενη και δοκιμαστε ξανα.',
                    duration: 'long'
                });
                console.log(reason);
                this.buttonsEnabled = true;
            });
        });
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