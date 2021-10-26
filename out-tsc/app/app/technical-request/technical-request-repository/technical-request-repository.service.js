import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TechnicalRequestRepositoryService = class TechnicalRequestRepositoryService {
    constructor(networkUtils) {
        this.networkUtils = networkUtils;
    }
    getPolicyAboutEmailsSms(lat, long) {
        return this.networkUtils.getPolicyAboutEmailsSms(lat, long);
    }
    getPolicyAboutAnonymity(issue, lat, long) {
        return this.networkUtils.getPolicyAboutAnonymity(issue, lat, long);
    }
    getRecommendations(issue, lat, long) {
        return this.networkUtils.getIssueRecommendations(issue, lat, long);
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
    addNewIssue(request, user, userDeviceId, userId) {
        return this.networkUtils.addNewIssue(request, user, userDeviceId, userId);
    }
};
TechnicalRequestRepositoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TechnicalRequestRepositoryService);
export { TechnicalRequestRepositoryService };
//# sourceMappingURL=technical-request-repository.service.js.map