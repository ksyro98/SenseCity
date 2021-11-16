var TechnicalRequestLogicService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileElement } from '../../entities/ProfileElement';
import { Recommendation } from '../../entities/Recommendation';
let TechnicalRequestLogicService = TechnicalRequestLogicService_1 = class TechnicalRequestLogicService {
    constructor(userService, repository) {
        this.userService = userService;
        this.repository = repository;
        this.verifiedEmail = false;
        this.verifiedPhone = false;
        this.setIsUserActive();
    }
    isEmailVerified() { return this.verifiedEmail; }
    isPhoneVerified() { return this.verifiedPhone; }
    setIsUserActive() {
        const user = this.userService.getUser();
        this.repository.isUserActive(user.email, user.phone, user.fullName).subscribe(x => {
            this.verifiedEmail = x[1].activate_email === '1';
            this.verifiedPhone = x[0].activate_sms === '1';
        });
    }
    getEmailProfileElement() {
        return ProfileElement.getProfileElementsFromUser(this.userService.getUser())[1]; // 1 --> email
    }
    getPhoneProfileElement() {
        return ProfileElement.getProfileElementsFromUser(this.userService.getUser())[2]; // 2 --> phone
    }
    getPolicyAboutEmailsSms() {
        if (this.isLocationUndefined()) {
            return this.getUndefinedLocationError();
        }
        const lat = this.request.location.coordinates[0];
        const long = this.request.location.coordinates[1];
        return this.repository.getPolicyAboutEmailsSms(lat, long).pipe(map(x => ({
            type: TechnicalRequestLogicService_1.POLICY_EMAIL_SMS_REQUEST,
            value: x
        })));
    }
    getPolicyAboutAnonymity() {
        if (this.isLocationUndefined()) {
            return this.getUndefinedLocationError();
        }
        const issueKey = this.request.subService.translationKey;
        const lat = this.request.location.coordinates[0];
        const long = this.request.location.coordinates[1];
        return this.repository.getPolicyAboutAnonymity(issueKey, lat, long).pipe(map(x => ({
            type: TechnicalRequestLogicService_1.POLICY_ANONYMITY_REQUEST,
            value: x
        })));
    }
    getRecommendations() {
        if (this.isLocationUndefined()) {
            return this.getUndefinedLocationError();
        }
        const issueKey = this.request.service.translationKey;
        const lat = this.request.location.coordinates[0];
        const long = this.request.location.coordinates[1];
        return this.repository.getRecommendations(issueKey, lat, long).pipe(map(x => x.length > 0 ? x[0].bugs.map(e => new Recommendation(e)) : []), map(x => ({
            type: TechnicalRequestLogicService_1.RECOMMENDATIONS_REQUEST,
            value: x
        })));
    }
    isLocationUndefined() {
        return this.request.location.coordinates.length < 2;
    }
    getUndefinedLocationError() {
        return this.getErrorObservable('Latitude and/or longitude are not defined yet.');
    }
    sendActivationCode(key) {
        if (key === TechnicalRequestLogicService_1.EMAIL_KEY) {
            return this.repository.sendActivationEmail(this.userService.getUser().email);
        }
        else if (key === TechnicalRequestLogicService_1.PHONE_KEY) {
            return this.repository.sendActivationMobileMessage(this.userService.getUser().phone, this.userService.getUser().fullName);
        }
        return this.getErrorObservable('Invalid key.');
    }
    addNewIssue() {
        if (this.userService.getUser().fullName === '' || this.userService.getUser().fullName === undefined) {
            return this.getErrorObservable('No user name.');
        }
        return this.repository.addNewIssue(this.request, this.userService.getUser(), '').pipe(map(x => ({
            type: TechnicalRequestLogicService_1.NEW_ISSUE_REQUEST,
            value: x
        })));
    }
    getErrorObservable(error) {
        return new Observable(subscriber => {
            subscriber.error(error);
        });
    }
};
TechnicalRequestLogicService.RECOMMENDATIONS_REQUEST = 'RECOMMENDATIONS';
TechnicalRequestLogicService.POLICY_EMAIL_SMS_REQUEST = 'POLICY_EMAIL_SMS';
TechnicalRequestLogicService.POLICY_ANONYMITY_REQUEST = 'POLICY_ANONYMITY';
TechnicalRequestLogicService.NEW_ISSUE_REQUEST = 'NEW_ISSUE_REQUEST';
TechnicalRequestLogicService.EMAIL_KEY = 'email';
TechnicalRequestLogicService.PHONE_KEY = 'phone-number';
TechnicalRequestLogicService = TechnicalRequestLogicService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TechnicalRequestLogicService);
export { TechnicalRequestLogicService };
//# sourceMappingURL=technical-request-logic.service.js.map