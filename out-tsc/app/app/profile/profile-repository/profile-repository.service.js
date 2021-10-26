import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ProfileRepositoryService = class ProfileRepositoryService {
    constructor(storageUserService, networkUtils) {
        this.storageUserService = storageUserService;
        this.networkUtils = networkUtils;
    }
    isUserActive(email, mobile, name, city, uuid) {
        return this.networkUtils.isUserActive(email, mobile, name, city, uuid);
    }
};
ProfileRepositoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProfileRepositoryService);
export { ProfileRepositoryService };
//# sourceMappingURL=profile-repository.service.js.map