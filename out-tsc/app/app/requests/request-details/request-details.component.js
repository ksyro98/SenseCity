import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { RequestDetailsMapModalComponent } from '../request-details-map-modal/request-details-map-modal.component';
let RequestDetailsComponent = class RequestDetailsComponent {
    constructor(modalController, router, localTranslateService) {
        this.modalController = modalController;
        this.router = router;
        this.localTranslateService = localTranslateService;
        this.type = 'Καθαριότητα';
        this.subtype = 'Κομμένα Κλαδιά';
        this.code = 'Κωδικός';
        this.status = 'Κατάσταση';
        this.statusValue = 'Επιβεβαιωμένο';
        this.reported = 'Αναφορά';
        this.reportDate = '29 Νοε 2020, 23:04';
        this.responsible = 'Ανάθεση';
        this.department = 'Τμήμα επίλυσης προβλημάτων';
        this.comments = 'Παρατηρήσεις';
        this.commentValue = 'Est aut quia qui aliquid non. Dolores qui sed quo. Omnis ut asperiores eos sequi omnis ab. Sint similique inventore ' +
            'quidem in magni cupiditate alias.';
        this.rating = 'Αξιολόγηση';
        this.locationName1 = 'ΠΕΟ Πάτρας Πύργου 250';
        this.locationName2 = 'Βραχναίικα 250 02, Ελλάδα';
        this.locationName = this.locationName1 + '<br>' + this.locationName2;
        this.setTranslationPairs();
    }
    ngOnInit() {
        // we use === 'true' because the parameter passed is a string
        this.router.queryParams.subscribe(params => this.completed = params.completed === 'true');
        this.localTranslateService.translateLanguage();
    }
    presentMapModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: RequestDetailsMapModalComponent,
                cssClass: 'general-modal-class',
                componentProps: {
                    lat: 38.246242,
                    long: 21.7350847,
                    locationName: this.locationName
                }
            });
            return yield modal.present();
        });
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: '_type-rds', callback: (res) => this.type = res });
        this.localTranslateService.pairs.push({ key: '_subtype-rds', callback: (res) => this.subtype = res });
        this.localTranslateService.pairs.push({ key: 'code-rds', callback: (res) => this.code = res });
        this.localTranslateService.pairs.push({ key: 'status-rds', callback: (res) => this.status = res });
        this.localTranslateService.pairs.push({ key: '_status-value-rds', callback: (res) => this.statusValue = res });
        this.localTranslateService.pairs.push({ key: 'reported-rds', callback: (res) => this.reported = res });
        this.localTranslateService.pairs.push({ key: '_report-date-rds', callback: (res) => this.reportDate = res });
        this.localTranslateService.pairs.push({ key: 'responsible-rds', callback: (res) => this.responsible = res });
        this.localTranslateService.pairs.push({ key: '_department-rds', callback: (res) => this.department = res });
        this.localTranslateService.pairs.push({ key: 'comments-rds', callback: (res) => this.comments = res });
        this.localTranslateService.pairs.push({ key: '_comment-value-rds', callback: (res) => this.commentValue = res });
        this.localTranslateService.pairs.push({ key: 'rating-rds', callback: (res) => this.rating = res });
        this.localTranslateService.pairs.push({ key: '_location-name-1-rds', callback: (res) => {
                this.locationName1 = res;
                this.locationName = this.locationName1 + '<br>' + this.locationName2;
                return null;
            } });
        this.localTranslateService.pairs.push({ key: '_location-name-2-rds', callback: (res) => {
                this.locationName2 = res;
                this.locationName = this.locationName1 + '<br>' + this.locationName2;
                return null;
            } });
    }
};
__decorate([
    Input()
], RequestDetailsComponent.prototype, "completed", void 0);
RequestDetailsComponent = __decorate([
    Component({
        selector: 'app-request-details',
        templateUrl: './request-details.component.html',
        styleUrls: ['./request-details.component.scss'],
    })
], RequestDetailsComponent);
export { RequestDetailsComponent };
//# sourceMappingURL=request-details.component.js.map