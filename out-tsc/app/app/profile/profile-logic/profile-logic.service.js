import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { User } from '../../entities/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileElement } from '../../entities/ProfileElement';
let ProfileLogicService = class ProfileLogicService {
    constructor(repository) {
        this.repository = repository;
        this.user = new User();
    }
    waitForUser() {
        return __awaiter(this, void 0, void 0, function* () {
            this.user = yield this.repository.getUser();
            return this.user;
        });
    }
    setUserValue(key, value) {
        this.user.setValue(key, value);
        this.repository.soreUserValue(key, value);
    }
    isUserActive() {
        return this.repository.isUserActive(this.user.email, this.user.phone, this.user.fullName).pipe(map(x => x[0]), map(x => ({ [ProfileElement.EMAIL_KEY]: x.activate_email === '1', [ProfileElement.PHONE_KEY]: x.activate_sms === '1' })));
    }
    sendActivationCode(key) {
        if (key === ProfileElement.EMAIL_KEY) {
            return this.repository.sendActivationEmail(this.user.email);
        }
        else if (key === ProfileElement.PHONE_KEY) {
            return this.repository.sendActivationMobileMessage(this.user.phone, this.user.fullName);
        }
        return new Observable(subscriber => {
            subscriber.error('Invalid key');
        });
    }
    activateUser(key, code) {
        if (key === ProfileElement.EMAIL_KEY) {
            return this.repository.activateEmail(this.user.email, code);
        }
        else if (key === ProfileElement.PHONE_KEY) {
            return this.repository.activateMobile(this.user.phone, code);
        }
        return new Observable(subscriber => {
            subscriber.error('Invalid key');
        });
    }
};
ProfileLogicService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProfileLogicService);
export { ProfileLogicService };
//# sourceMappingURL=profile-logic.service.js.map