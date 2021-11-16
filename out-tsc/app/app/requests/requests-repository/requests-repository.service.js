import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let RequestsRepositoryService = class RequestsRepositoryService {
    constructor(networkUtils) {
        this.networkUtils = networkUtils;
    }
    getIssues(userEmail, userPhoneNumber, issueStatus) {
        return this.networkUtils.findIssue(userEmail, userPhoneNumber, issueStatus);
    }
    getFullIssue(issueAlias) {
        return this.networkUtils.getFullIssue(issueAlias);
    }
};
RequestsRepositoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RequestsRepositoryService);
export { RequestsRepositoryService };
//# sourceMappingURL=requests-repository.service.js.map