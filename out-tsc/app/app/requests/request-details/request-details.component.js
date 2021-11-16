import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { RequestDetailsMapModalComponent } from '../request-details-map-modal/request-details-map-modal.component';
import { TechnicalRequest } from '../../entities/TechnicalRequest';
import { getDayText, getMonthText } from '../../utils/date-utils';
import { TECHNICAL_SERVICES_LIST } from '../../entities/Service';
let RequestDetailsComponent = class RequestDetailsComponent {
    constructor(modalController, router, localTranslateService, logic) {
        this.modalController = modalController;
        this.router = router;
        this.localTranslateService = localTranslateService;
        this.logic = logic;
        this.code = 'Κωδικός';
        this.status = 'Κατάσταση';
        this.ratingTxt = 'Αξιολόγηση';
        this.requestTxt = 'Αίτημα';
        this.reported = 'Αναφορά';
        this.responsible = 'Ανάθεση';
        this.comments = 'Παρατηρήσεις';
        this.inProgressTxt = 'Σε Εξέλειξη';
        this.confirmedTxt = 'Επιβεβαιώθηκε';
        this.resolvedTxt = 'Επιλύθηκε';
        this.unknownTxt = 'Άγνωστο';
        this.monthTxt = { name: 'Γεν.', translationKey: 'month-1' };
        this.dayTxt = { name: 'Δευτέρα', translationKey: 'day-1' };
        this.serviceTxt = { name: 'Καθαριότητα', translationKey: 'garbage' };
        this.setTranslationPairs();
    }
    ngOnInit() {
        // we use === 'true' because the parameter passed is a string
        this.router.queryParams.subscribe(params => {
            this.alias = params.alias;
            this.completed = params.completed === 'true';
        });
        this.localTranslateService.translateLanguage();
        this.issue$ = this.logic.getFullIssue(this.alias);
    }
    presentMapModal(location, issueAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: RequestDetailsMapModalComponent,
                cssClass: 'general-modal-class',
                componentProps: {
                    lat: location.coordinates[1],
                    long: location.coordinates[0],
                    locationName: issueAddress
                }
            });
            return yield modal.present();
        });
    }
    getStatusText(status) {
        switch (status) {
            case TechnicalRequest.IN_PROGRESS:
                return this.inProgressTxt;
            case TechnicalRequest.CONFIRMED:
                return this.confirmedTxt;
            case TechnicalRequest.RESOLVED:
                return this.resolvedTxt;
        }
        return this.unknownTxt;
    }
    getCommentsText(comments) {
        return comments.length !== 0 ? comments : '-';
    }
    getDateText(date) {
        const parts = date.split(' ');
        const timeParts = parts[4].split(':');
        const time = `${timeParts[0]}:${timeParts[1]}`;
        const day = parts[0];
        const month = parts[1];
        this.dayTxt = getDayText(day);
        this.monthTxt = getMonthText(month);
        return `${this.dayTxt.name}, ${parts[2]} ${this.monthTxt.name} ${parts[3]} (${time})`;
    }
    getServiceText(service) {
        const fullService = TECHNICAL_SERVICES_LIST.filter((e) => e.translationKey === service)[0];
        this.serviceTxt = {
            name: fullService.name,
            translationKey: fullService.translationKey
        };
        return this.serviceTxt.name;
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'code-rds', callback: (res) => this.code = res });
        this.localTranslateService.pairs.push({ key: 'status-rds', callback: (res) => this.status = res });
        this.localTranslateService.pairs.push({ key: 'reported-rds', callback: (res) => this.reported = res });
        this.localTranslateService.pairs.push({ key: 'responsible-rds', callback: (res) => this.responsible = res });
        this.localTranslateService.pairs.push({ key: 'comments-rds', callback: (res) => this.comments = res });
        this.localTranslateService.pairs.push({ key: 'rating-rds', callback: (res) => this.ratingTxt = res });
        this.localTranslateService.pairs.push({ key: 'request', callback: (res) => this.requestTxt = res });
        this.localTranslateService.pairs.push({ key: 'in-progress-lc', callback: (res) => this.inProgressTxt = res });
        this.localTranslateService.pairs.push({ key: 'confirmed', callback: (res) => this.confirmedTxt = res });
        this.localTranslateService.pairs.push({ key: 'resolved', callback: (res) => this.resolvedTxt = res });
        this.localTranslateService.pairs.push({ key: 'unknown', callback: (res) => this.unknownTxt = res });
        this.localTranslateService.pairs.push({ key: this.monthTxt.translationKey, callback: (res) => this.monthTxt.name = res });
        this.localTranslateService.pairs.push({ key: this.dayTxt.translationKey, callback: (res) => this.dayTxt.name = res });
        this.localTranslateService.pairs.push({ key: this.serviceTxt.translationKey, callback: (res) => this.serviceTxt.name = res });
    }
};
__decorate([
    Input()
], RequestDetailsComponent.prototype, "completed", void 0);
__decorate([
    Input()
], RequestDetailsComponent.prototype, "alias", void 0);
RequestDetailsComponent = __decorate([
    Component({
        selector: 'app-request-details',
        templateUrl: './request-details.component.html',
        styleUrls: ['./request-details.component.scss'],
    })
], RequestDetailsComponent);
export { RequestDetailsComponent };
//# sourceMappingURL=request-details.component.js.map