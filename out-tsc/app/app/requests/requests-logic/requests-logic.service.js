import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TechnicalRequest } from '../../entities/TechnicalRequest';
import { Service } from '../../entities/Service';
import { RequestSummary } from '../../entities/RequestSummary';
let RequestsLogicService = class RequestsLogicService {
    constructor(repository, userService) {
        this.repository = repository;
        this.userService = userService;
    }
    getActiveIssues() {
        return this.getIssues('in_progress');
    }
    getCompletedIssues() {
        return this.getIssues('resolved');
    }
    getIssues(status) {
        const user = this.userService.getUser();
        return this.repository.getIssues(user.email, user.phone, status).pipe(map(e => JSON.parse(e.body).bugs), map(bugs => bugs.map(e => new RequestSummary(e.status, e.alias[0], e.url, e.cf_city_name, e.cf_city_address, e.id))));
    }
    getFullIssue(issueAlias) {
        return this.repository.getFullIssue(issueAlias).pipe(map(e => new TechnicalRequest(Service.getTechnicalServiceFromKey(e[0].issue), Service.getSubService(e[0].issue, e[0].value_desc), e[0].comments, undefined, e[0].loc, undefined, e[0].bug_id, e[0].status, e[0].city_address, e[0].department, e[0].municipality, e[0].create_at)));
    }
};
RequestsLogicService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RequestsLogicService);
export { RequestsLogicService };
//# sourceMappingURL=requests-logic.service.js.map