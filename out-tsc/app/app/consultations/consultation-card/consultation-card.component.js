import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { mapMonth } from '../../utils/date-utils';
import { ConsultationDetailsModalComponent } from '../consultation-details/consultation-details-modal.component';
let ConsultationCardComponent = class ConsultationCardComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    getDay() {
        return this.consultation.date.getDate().toString();
    }
    getMonth() {
        return mapMonth(this.consultation.date.getMonth());
    }
    getYear() {
        return this.consultation.date.getFullYear().toString();
    }
    presentDetailsModal() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.router.navigate(['/consultations/details'], {
            //   queryParams: {
            //     name: this.consultation.name,
            //     text: this.consultation.text,
            //     files: this.consultation.files,
            //     comments: this.consultation.comments,
            //     follows: this.consultation.follows,
            //     rating: this.consultation.rating,
            //     likes: this.consultation.likes,
            //     dislikes: this.consultation.dislikes,
            //     date: this.consultation.date
            //   }
            // });
            const modal = yield this.modalController.create({
                component: ConsultationDetailsModalComponent,
                cssClass: 'general-modal-class',
                componentProps: {
                    consultation: this.consultation
                }
            });
            modal.onDidDismiss().then(data => {
                this.consultation.likes = data.data.likes;
                this.consultation.dislikes = data.data.dislikes;
                this.consultation.rating = data.data.rating;
                this.consultation.follows = data.data.follows;
            });
            return yield modal.present();
        });
    }
};
__decorate([
    Input()
], ConsultationCardComponent.prototype, "consultation", void 0);
ConsultationCardComponent = __decorate([
    Component({
        selector: 'app-consultation-card',
        templateUrl: './consultation-card.component.html',
        styleUrls: ['./consultation-card.component.scss'],
    })
], ConsultationCardComponent);
export { ConsultationCardComponent };
//# sourceMappingURL=consultation-card.component.js.map