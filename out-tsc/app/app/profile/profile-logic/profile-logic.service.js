import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProfileElement } from '../../entities/ProfileElement';
import { CITIES } from '../../constants/Cities';
let ProfileLogicService = class ProfileLogicService {
    constructor(userService, repository, storageCityService) {
        this.userService = userService;
        this.repository = repository;
        this.storageCityService = storageCityService;
        if (this.city === undefined || this.city === null) {
            this.city = CITIES[4];
        }
    }
    waitForUser() {
        return __awaiter(this, void 0, void 0, function* () {
            let user = this.userService.getUser();
            if (!user) {
                yield this.userService.initUser();
                user = this.userService.getUser();
            }
            return user;
        });
    }
    setUserValue(key, value) {
        this.userService.setUserValue(key, value);
    }
    getUser() {
        return this.userService.getUser();
    }
    isUserActive() {
        const user = this.userService.getUser();
        return this.repository.isUserActive(user.email, user.phone, user.fullName).pipe(map(x => ({
            [ProfileElement.EMAIL_KEY]: user.email.length === 0 || x[1].activate_email === '1',
            [ProfileElement.PHONE_KEY]: user.phone.length === 0 || x[0].activate_sms === '1'
        })));
    }
    getCity() {
        return __awaiter(this, void 0, void 0, function* () {
            const city = yield this.storageCityService.getCity();
            if (city) {
                this.city = city;
            }
            return this.city;
        });
    }
    setCity(city) {
        this.storageCityService.storeCity(city);
    }
};
ProfileLogicService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProfileLogicService);
export { ProfileLogicService };
//# sourceMappingURL=profile-logic.service.js.map