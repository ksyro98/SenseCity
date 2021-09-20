import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { User } from '../../entities/User';
const { Storage } = Plugins;
let StorageUserService = class StorageUserService {
    constructor() { }
    storeUserFields(fieldKey, fieldValue) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Storage.set({
                key: fieldKey,
                value: fieldValue
            });
        });
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const [name, email, phoneNumber, fathersName, mothersName, idNumber, taxNumber] = (yield Promise.all([
                Storage.get({ key: 'name' }),
                Storage.get({ key: 'email' }),
                Storage.get({ key: 'phone-number' }),
                Storage.get({ key: 'fathers-name' }),
                Storage.get({ key: 'mothers-name' }),
                Storage.get({ key: 'id-number' }),
                Storage.get({ key: 'tax-number' })
            ])).map((el) => el.value);
            return new User(name, email, phoneNumber, fathersName, mothersName, idNumber, taxNumber);
        });
    }
};
StorageUserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageUserService);
export { StorageUserService };
//# sourceMappingURL=storage-user.service.js.map