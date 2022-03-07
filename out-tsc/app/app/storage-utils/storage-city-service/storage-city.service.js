import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { CITIES } from '../../constants/Cities';
const { Storage } = Plugins;
let StorageCityService = class StorageCityService {
    constructor() {
        this.storageKey = 'city-storage-key';
    }
    storeCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Storage.set({
                key: this.storageKey,
                value: city.cityKey
            });
        });
    }
    getCity() {
        return __awaiter(this, void 0, void 0, function* () {
            const storedCityKey = yield Storage.get({ key: this.storageKey });
            if (storedCityKey.value) {
                return CITIES.find((city) => city.cityKey === storedCityKey.value);
            }
        });
    }
};
StorageCityService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageCityService);
export { StorageCityService };
//# sourceMappingURL=storage-city.service.js.map