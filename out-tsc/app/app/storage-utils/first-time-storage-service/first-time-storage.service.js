import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
let FirstTimeStorageService = class FirstTimeStorageService {
    constructor() { }
    setFirstTime(firstTime) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Storage.set({
                key: 'first-time',
                value: firstTime.toString()
            });
        });
    }
    isFirstTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = yield Storage.get({ key: 'first-time' });
            return ret.value !== 'false';
        });
    }
};
FirstTimeStorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FirstTimeStorageService);
export { FirstTimeStorageService };
//# sourceMappingURL=first-time-storage.service.js.map