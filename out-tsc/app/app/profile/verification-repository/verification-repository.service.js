import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let VerificationRepositoryService = class VerificationRepositoryService {
    constructor(storageUserService, networkUtils) {
        this.storageUserService = storageUserService;
        this.networkUtils = networkUtils;
    }
    sendActivationEmail(userEmail) {
        return this.networkUtils.sendActivationEmail(userEmail);
    }
    sendActivationMobileMessage(userMobile, userName, lat, long, city) {
        return this.networkUtils.sendActivationMobileMessage(userMobile, userName, lat, long, city);
    }
    activateEmail(userEmail, emailCode) {
        return this.networkUtils.activateEmail(userEmail, emailCode);
    }
    activateMobile(userPhone, emailCode) {
        return this.networkUtils.activateMobile(userPhone, emailCode);
    }
};
VerificationRepositoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], VerificationRepositoryService);
export { VerificationRepositoryService };
//# sourceMappingURL=verification-repository.service.js.map