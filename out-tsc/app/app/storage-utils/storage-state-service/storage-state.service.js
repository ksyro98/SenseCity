import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
let StorageStateService = class StorageStateService {
    constructor() {
        this.storageKey = 'st-state';
    }
    setState(val) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Storage.set({
                key: this.storageKey,
                value: val.toString()
            });
        });
    }
    stateIsTrue() {
        return __awaiter(this, void 0, void 0, function* () {
            const state = yield Storage.get({ key: this.storageKey });
            return state.value === 'true';
        });
    }
};
StorageStateService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageStateService);
export { StorageStateService };
//# sourceMappingURL=storage-state.service.js.map