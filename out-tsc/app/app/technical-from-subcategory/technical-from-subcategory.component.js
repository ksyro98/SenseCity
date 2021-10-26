import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestedService } from '../entities/RequestedService';
import { isOtherCategory } from '../entities/OtherCategory';
let TechnicalFromSubcategoryComponent = class TechnicalFromSubcategoryComponent {
    // @Input() value: number;
    // @Output() valueChange = new EventEmitter<number>();
    constructor() {
        this.canProceedEvent = new EventEmitter();
        this.categoryChange = new EventEmitter();
        this.otherPressed = false;
    }
    ngOnInit() {
        this.categories = RequestedService.getCategoryForService(this.service.id);
        this.setOtherPressed(this.category.id === -1);
        this.value = this.getCategoryDescription();
    }
    onItemClick(category) {
        this.setCategory(category);
        this.setOtherPressed(category.id === -1);
    }
    setOtherPressed(otherPressed) {
        if (this.otherPressed === true && otherPressed === true) {
            return;
        }
        this.otherPressed = otherPressed;
        this.setCanProceed(!this.otherPressed);
    }
    setCanProceed(canProceed) {
        this.canProceed = canProceed;
        this.canProceedEvent.emit(this.canProceed);
    }
    setCategory(category) {
        this.category = category;
        this.categoryChange.emit(this.category);
    }
    getCategoryDescription() {
        if (isOtherCategory(this.category)) {
            return this.category.shortDescription;
        }
        return '';
    }
};
__decorate([
    Input()
], TechnicalFromSubcategoryComponent.prototype, "service", void 0);
__decorate([
    Output()
], TechnicalFromSubcategoryComponent.prototype, "canProceedEvent", void 0);
__decorate([
    Input()
], TechnicalFromSubcategoryComponent.prototype, "category", void 0);
__decorate([
    Output()
], TechnicalFromSubcategoryComponent.prototype, "categoryChange", void 0);
TechnicalFromSubcategoryComponent = __decorate([
    Component({
        selector: 'app-technical-form-sub-service',
        templateUrl: './technical-form-sub-service.component.html',
        styleUrls: ['./technical-form-sub-service.component.scss'],
    })
], TechnicalFromSubcategoryComponent);
export { TechnicalFromSubcategoryComponent };
//# sourceMappingURL=technical-form-sub-service.component.js.map
