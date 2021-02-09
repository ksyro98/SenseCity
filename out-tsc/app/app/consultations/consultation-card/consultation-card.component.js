import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { mapMonth } from '../../utils/date-utils';
let ConsultationCardComponent = class ConsultationCardComponent {
    constructor() { }
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