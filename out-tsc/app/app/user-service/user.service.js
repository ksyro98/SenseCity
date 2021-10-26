import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(storageUserService) {
        this.storageUserService = storageUserService;
    }
    initUser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserFromStorage();
        });
    }
    getUserFromStorage() {
        return __awaiter(this, void 0, void 0, function* () {
            this.user = yield this.storageUserService.getUser();
        });
    }
    getUser() {
        return this.user;
    }
    setUserValue(key, value) {
        this.user.setValue(key, value);
        this.storageUserService.storeUserFields(key, value);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map