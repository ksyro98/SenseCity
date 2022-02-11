import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
let StorageCounterService = class StorageCounterService {
    constructor() {
        this.storageKey = 'counter-val';
    }
    updateCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            const strVal = yield Storage.get({ key: this.storageKey });
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
    isFirstTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const val = +((yield Storage.get({ key: this.storageKey })).value);
            return val === 0;
        });
    }
    isSecondTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const val = +(yield Storage.get({ key: this.storageKey }));
            return val === 1;
        });
    }
    isMoreThanSecondTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const strVal = yield Storage.get({ key: this.storageKey });
            const val = +strVal.value;
            return val > 1;
        });
    }
    getValue() {
        return __awaiter(this, void 0, void 0, function* () {
            const strVal = yield Storage.get({ key: this.storageKey });
            return +strVal.value;
        });
    }
};
StorageCounterService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageCounterService);
export { StorageCounterService };
//# sourceMappingURL=storage-counter.service.js.map