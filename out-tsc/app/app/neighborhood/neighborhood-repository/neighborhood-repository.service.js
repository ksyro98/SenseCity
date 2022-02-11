import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { NeighborhoodMessage } from '../../entities/NeighborhoodMessage';
let NeighborhoodRepositoryService = class NeighborhoodRepositoryService {
    constructor(networkUtils) {
        this.networkUtils = networkUtils;
    }
    registerLocation(email, location) {
        return this.networkUtils.registerLocation(email, location.coordinates[1], location.coordinates[0]);
    }
    unregisterLocation(email) {
        return this.networkUtils.unregisterLocation(email);
    }
    getNeighborhood(email) {
        return this.networkUtils.getNeighborhood(email);
    }
    getMessages(email) {
        return this.networkUtils.getMessages(email).pipe(map((x) => x.map((e) => new NeighborhoodMessage(e.title, e.msg, e.startDate))));
    }
};
NeighborhoodRepositoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NeighborhoodRepositoryService);
export { NeighborhoodRepositoryService };
//# sourceMappingURL=neighborhood-repository.service.js.map