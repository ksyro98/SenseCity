import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ProfileRepositoryService = class ProfileRepositoryService {
    constructor(storageUserService, networkUtils) {
        this.storageUserService = storageUserService;
        this.networkUtils = networkUtils;
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.storageUserService.getUser();
        });
    }
    soreUserValue(key, value) {
        this.storageUserService.storeUserFields(key, value);
    }
    isUserActive(email, mobile, name, city, uuid) {
        return this.networkUtils.isUserActive(email, mobile, name, city, uuid);
    }
    sendActivationEmail(userEmail, userUuid) {
        return this.networkUtils.sendActivationEmail(userEmail, userUuid);
    }
    sendActivationMobileMessage(userMobile, userName, userUuid, lat, long, city) {
        return this.networkUtils.sendActivationMobileMessage(userMobile, userName, userUuid, lat, long, city);
    }
    activateEmail(userEmail, emailCode, userUuid) {
        return this.networkUtils.activateEmail(userEmail, emailCode);
    }
    activateMobile(userPhone, emailCode, userUuid) {
        return this.networkUtils.activateEmail(userPhone, emailCode);
    }
};
ProfileRepositoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProfileRepositoryService);
export { ProfileRepositoryService };
//# sourceMappingURL=profile-repository.service.js.map