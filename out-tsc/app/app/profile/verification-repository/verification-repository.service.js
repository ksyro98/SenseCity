import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let VerificationRepositoryService = class VerificationRepositoryService {
    constructor(storageUserService, networkUtils) {
        this.storageUserService = storageUserService;
        this.networkUtils = networkUtils;
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
VerificationRepositoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], VerificationRepositoryService);
export { VerificationRepositoryService };
//# sourceMappingURL=verification-repository.service.js.map