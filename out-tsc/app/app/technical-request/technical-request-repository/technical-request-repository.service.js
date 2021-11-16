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
    isUserActive(email, mobile, name, city) {
        return this.networkUtils.isUserActive(email, mobile, name, city);
    }
    sendActivationEmail(userEmail) {
        return this.networkUtils.sendActivationEmail(userEmail);
    }
    sendActivationMobileMessage(userMobile, userName, lat, long, city) {
        return this.networkUtils.sendActivationMobileMessage(userMobile, userName, lat, long, city);
    }
    addNewIssue(request, user, userDeviceId) {
        return this.networkUtils.addNewIssue(request, user, userDeviceId);
    }
};
TechnicalRequestRepositoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TechnicalRequestRepositoryService);
export { TechnicalRequestRepositoryService };
//# sourceMappingURL=technical-request-repository.service.js.map