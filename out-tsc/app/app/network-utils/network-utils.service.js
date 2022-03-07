var NetworkUtilsService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
const { Device } = Plugins;
const BASE_URL = 'http://apitest.sense.city:4000';
let NetworkUtilsService = NetworkUtilsService_1 = class NetworkUtilsService {
    constructor(http) {
        this.http = http;
        if (this.deviceUuid === undefined) {
            this.deviceUuid = '';
            Device.getInfo().then((info) => this.deviceUuid = info.uuid);
        }
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
        const params = `uuid=${this.deviceUuid}&name=${userName.replace(' ', '%20')}&mobile=${userMobile}`
            + `&lat=${lat}&long=${long}&city=${city}`;
        const url = `${BASE_URL}/api/1.0/activate_user?${params}`;
        return this.http.post(url, {}, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    activateEmail(userEmail, emailCode) {
        const url = `${BASE_URL}/api/1.0/activate_email?uuid=${this.deviceUuid}&code=${emailCode}&email=${userEmail}`;
        return this.http.post(url, {}, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    activateMobile(userPhone, mobileCode) {
        const url = `${BASE_URL}/api/1.0/activate_mobile?uuid=${this.deviceUuid}&code=${mobileCode}&mobile=${userPhone}`;
        console.log(url);
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
    getIssueRecommendations(serviceIssueKey, issueLat, issueLong) {
        const url = `${BASE_URL}/api/1.0/issue_recommendation`;
        const body = {
            issue: serviceIssueKey,
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
            loc: request.location,
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
    setFeeling(mood, location) {
        const url = `${BASE_URL}/api/1.0/feelings`;
        const body = {
            loc: location,
            issue: mood.getIssue(),
            device_id: this.deviceUuid,
            value_desc: mood.getValueDescription()
        };
        return this.http.post(url, body, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    registerLocation(email, latitude, longitude) {
        const url = `${BASE_URL}/api/1.0/register/myNeighboor`;
        const body = {
            fcmToken: '',
            email_user: email,
            set_longitude: longitude.toString(),
            set_lattitude: latitude.toString()
        };
        return this.httpWithFcmToken(url, body);
    }
    unregisterLocation(email) {
        const url = `${BASE_URL}/api/1.0/unregister/myNeighboor`;
        const body = {
            email_user: email,
        };
        return this.http.post(url, body, {
            headers: NetworkUtilsService_1.getHeaders()
        });
    }
    getNeighborhood(email) {
        const url = `${BASE_URL}/api/1.0/get_my_neighboor`;
        const body = {
            email_user: email,
            fcmToken: ''
        };
        return this.httpWithFcmToken(url, body);
    }
    getMessages(email) {
        const url = `${BASE_URL}/api/1.0/myNeighboor/get_my_msg`;
        const body = {
            email_user: email,
            fcmToken: ''
        };
        return this.httpWithFcmToken(url, body);
    }
    httpWithFcmToken(url, body) {
        return new Observable(subscriber => {
            this.getFcmToken().subscribe(token => {
                body.fcmToken = token;
                this.http.post(url, body, {
                    headers: NetworkUtilsService_1.getHeaders()
                }).subscribe(res => subscriber.next(res));
            });
        });
    }
    getFcmToken() {
        return new Observable(subscriber => {
            FCM.getToken().then(token => subscriber.next(token));
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