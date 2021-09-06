import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
// This should be a service
let RepositoryBase = class RepositoryBase {
    constructor(http) {
        this.http = http;
        this.path = '';
    }
    postNetworkRequest(path, body) {
        // return new Observable<boolean>(subscriber => {
        //     simplePostRequest(path, body).then((res) => subscriber.next(res));
        // });
        return this.http.post(path, body);
    }
    getNetworkRequest(path) {
        // return new Observable<any>(subscriber => {
        //     simpleGetRequest(path).then((res) => subscriber.next(res));
        // });
        return this.http.get(path);
    }
};
RepositoryBase = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RepositoryBase);
export { RepositoryBase };
//# sourceMappingURL=RepositoryBase.js.map