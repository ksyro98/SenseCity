var NeighborhoodLogicService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
let NeighborhoodLogicService = NeighborhoodLogicService_1 = class NeighborhoodLogicService {
    constructor(repository, userService) {
        this.repository = repository;
        this.userService = userService;
    }
    setLocation(location) {
        this.location = location;
    }
    registerNeighborhood() {
        return this.userEmailExists()
            ? this.repository.registerLocation(this.userService.getUser().email, this.location)
            : new Observable(subscriber => subscriber.error(NeighborhoodLogicService_1.NO_EMAIL_ERROR));
    }
    unregisterNeighborhood() {
        return this.userEmailExists()
            ? this.repository.unregisterLocation(this.userService.getUser().email)
            : new Observable(subscriber => subscriber.error(NeighborhoodLogicService_1.NO_EMAIL_ERROR));
    }
    getNeighborhood() {
        return this.userEmailExists()
            ? this.repository.getNeighborhood(this.userService.getUser().email)
                .pipe(map(x => x.length > 0 ? x[0].loc : NeighborhoodLogicService_1.DEFAULT_POINT))
            : new Observable(subscriber => subscriber.next(NeighborhoodLogicService_1.DEFAULT_POINT));
    }
    userEmailExists() {
        return this.userService.getUser() !== null && this.userService.getUser() !== undefined &&
            this.userService.getUser().email !== null && this.userService.getUser().email !== undefined &&
            this.userService.getUser().email !== '';
    }
    getMessages() {
        return this.userEmailExists()
            ? this.repository.getMessages(this.userService.getUser().email)
            : new Observable(subscriber => subscriber.error(NeighborhoodLogicService_1.NO_EMAIL_ERROR));
    }
};
NeighborhoodLogicService.NO_EMAIL_ERROR = 'NO_EMAIL_ERROR';
NeighborhoodLogicService.DEFAULT_POINT = {
    coordinates: [21.7350847, 38.246242],
    type: 'Point'
};
NeighborhoodLogicService = NeighborhoodLogicService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NeighborhoodLogicService);
export { NeighborhoodLogicService };
//# sourceMappingURL=neighborhood-logic.service.js.map