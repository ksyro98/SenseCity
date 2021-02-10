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
            const modal = yield this.modalController.create({
                component: ConsultationDetailsModalComponent,
                cssClass: 'general-modal-class',
                componentProps: {
                    consultation: this.consultation
                }
            });
            modal.onDidDismiss().then(res => {
                this.consultation.likes = res.data.likes;
                this.consultation.dislikes = res.data.dislikes;
                this.consultation.rating = res.data.rating;
                this.consultation.follows = res.data.follows;
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