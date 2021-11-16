var NetworkUtilsService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;
const BASE_URL = 'http://apitest.sense.city:4000';
let NetworkUtilsService = NetworkUtilsService_1 = class NetworkUtilsService {
    constructor(http) {
        this.http = http;
        this.deviceUuid = '';
        Device.getInfo().then((info) => this.deviceUuid = info.uuid);
    }
    static getHeaders() {
        return {
            'Content-Type': 'application/json',
            Accept: '*/*'
        };
    }
    isUserActive(usersEmail, usersMobile, usersName, usersCity) {
        const tempCity = 'testcity1';
        const url = `${BASE_URL}/api/1.0/is_activate_user`;
        const requestBody = {
            city: tempCity,
            email: usersEmail,
            mobile: usersMobile,
            name: usersName,
            uuid: this.deviceUuid
        };
        return this.http.post(url, requestBody, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    sendActivationEmail(userEmail) {
        const url = `${BASE_URL}/api/1.0/activate_user?uuid=${this.deviceUuid}&email=${userEmail}`;
        return this.http.post(url, {}, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    sendActivationMobileMessage(userMobile, userName, lat, long, city) {
        lat = 38.29236177807543;
        long = 21.786332993872996;
        city = 'patras';
        const params = `uuid=${this.deviceUuid}&name=${userName.replace(' ', '%20')}&mobile=${userMobile}&lat=${lat}&long=${long}&city=${city}`;
        const url = `${BASE_URL}/api/1.0/activate_user?${params}`;
        return this.http.post(url, {}, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    activateEmail(userEmail, emailCode) {
        // const url = `${BASE_URL}/api/1.0/activate_email?uuid=${this.deviceUuid}&code=${emailCode}&email=${userEmail}`;
        const url = `${BASE_URL}/api/1.0/activate_email?uuid=web-site&code=${emailCode}&email=${userEmail}`;
        return this.http.post(url, {}, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    activateMobile(userPhone, mobileCode) {
        const url = `${BASE_URL}/api/1.0/activate_mobile?uuid=${this.deviceUuid}&code=${mobileCode}&mobile=${userPhone}`;
        return this.http.post(url, {}, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    getPolicyAboutEmailsSms(lat, long) {
        const url = `${BASE_URL}/api/1.0/activate_city_policy?lat=${lat}&long=${long}`;
        return this.http.post(url, {}, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    getPolicyAboutAnonymity(issue, lat, long) {
        const url = `${BASE_URL}/api/1.0/city_policy?coordinates=[${lat},${long}]&issue=${issue}`;
        return this.http.get(url, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    getIssueRecommendations(subServiceIssue, issueLat, issueLong) {
        const url = `${BASE_URL}/api/1.0/issue_recommendation`;
        const body = {
            issue: subServiceIssue,
            lat: issueLat,
            long: issueLong
        };
        return this.http.post(url, body, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    addNewIssue(request, user, userDeviceId) {
        const url = `${BASE_URL}/api/1.0/add_new_issue`;
        const body = {
            loc: {
                type: request.location.type,
                coordinates: [request.location.coordinates[1], request.location.coordinates[0]]
            },
            issue: request.service.translationKey,
            device_id: userDeviceId,
            value_desc: request.subService.name,
            comments: request.comments,
            image_name: request.imageDataUrl,
            uuid: this.deviceUuid,
            name: user.fullName,
            email: user.email,
            mobile_num: user.phone
        };
        return this.http.post(url, body, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    subscribeToIssue(issueId, user) {
        const url = `${BASE_URL}/api/1.0/issue_subscribe`;
        const body = {
            bug_id: issueId,
            email: user.email,
            mobile_num: user.phone,
            name: user.fullName
        };
        return this.http.post(url, body, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    findIssue(userEmail, userPhoneNumber, issueStatus) {
        const url = `${BASE_URL}/api/1.0/find_my_issue`;
        const body = {
            email: userEmail,
            mobile_num: userPhoneNumber,
            status: issueStatus
        };
        return this.http.post(url, body, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    getFullIssue(issueAlias) {
        const url = `${BASE_URL}/api/1.0/fullissue/${issueAlias}`;
        return this.http.get(url, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
};
NetworkUtilsService = NetworkUtilsService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NetworkUtilsService);
export { NetworkUtilsService };
//# sourceMappingURL=network-utils.service.js.map