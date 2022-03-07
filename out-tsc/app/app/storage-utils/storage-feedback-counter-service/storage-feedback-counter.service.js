import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
let StorageFeedbackCounterService = class StorageFeedbackCounterService {
    constructor(storageCounter) {
        this.storageCounter = storageCounter;
        this.storageKey = 'feedback-val';
    }
    updateCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            const strVal = yield Storage.get({ key: this.storageKey });
            console.log(strVal);
            if (strVal.value === null || isNaN(Number(strVal.value))) {
                yield Storage.set({
                    key: this.storageKey,
                    value: '0'
                });
                return;
            }
            let val = parseInt(strVal.value, 10);
            val++;
            yield Storage.set({
                key: this.storageKey,
                value: val.toString()
            });
        });
    }
    shouldShowDialog() {
        return __awaiter(this, void 0, void 0, function* () {
            const strVal = yield Storage.get({ key: this.storageKey });
            const feedbackVal = +strVal.value;
            const counterVal = yield this.storageCounter.getValue();
            return feedbackVal < parseInt((counterVal / 10).toString(), 10);
        });
    }
};
StorageFeedbackCounterService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageFeedbackCounterService);
export { StorageFeedbackCounterService };
//# sourceMappingURL=storage-feedback-counter.service.js.map