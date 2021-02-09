import { __awaiter, __decorate } from "tslib";
import { Component, HostListener, Input } from '@angular/core';
import { ConsultationCommentsModalComponent } from '../consultation-comments-modal/consultation-comments-modal.component';
let ConsultationDetailsComponent = class ConsultationDetailsComponent {
    constructor(router, location, modalController) {
        this.router = router;
        this.location = location;
        this.modalController = modalController;
        this.isHidden = true;
    }
    ngOnInit() { }
    getNumberOfComments() {
        return this.consultation.comments === undefined
            ? '0'
            : this.consultation.comments.length.toString();
    }
    onBackArrowPressed() {
        console.log('test');
        this.modalController.dismiss(this.consultation);
    }
    rate(liked) {
        switch (this.consultation.rating) {
            case -1:
                if (liked) {
                    this.consultation.dislikes--;
                    this.consultation.likes++;
                    this.consultation.rating = 1;
                }
                else {
                    this.consultation.dislikes--;
                    this.consultation.rating = 0;
                }
                break;
            case 0:
                if (liked) {
                    this.consultation.likes++;
                    this.consultation.rating = 1;
                }
                else {
                    this.consultation.dislikes++;
                    this.consultation.rating = -1;
                }
                break;
            case 1:
                if (!liked) {
                    this.consultation.likes--;
                    this.consultation.dislikes++;
                    this.consultation.rating = -1;
                }
                else {
                    this.consultation.likes--;
                    this.consultation.rating = 0;
                }
        }
    }
    toggleFollows() {
        this.consultation.follows = !this.consultation.follows;
    }
    presentCommentsModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ConsultationCommentsModalComponent,
                cssClass: 'general-modal-class',
                componentProps: {}
            });
            return yield modal.present();
        });
    }
    overrideHardwareBackAction($event) {
        return __awaiter(this, void 0, void 0, function* () {
            this.onBackArrowPressed();
        });
    }
};
__decorate([
    Input()
], ConsultationDetailsComponent.prototype, "consultation", void 0);
__decorate([
    HostListener('document:ionBackButton', ['$event'])
], ConsultationDetailsComponent.prototype, "overrideHardwareBackAction", null);
ConsultationDetailsComponent = __decorate([
    Component({
        selector: 'app-consultation-details',
        templateUrl: './consultation-details.component.html',
        styleUrls: ['./consultation-details.component.scss'],
    })
], ConsultationDetailsComponent);
export { ConsultationDetailsComponent };
//# sourceMappingURL=consultation-details.component.js.map