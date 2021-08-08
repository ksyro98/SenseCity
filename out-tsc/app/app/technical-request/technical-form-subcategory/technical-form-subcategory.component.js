import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestedService } from '../../entities/RequestedService';
import { isOtherCategory } from '../../entities/OtherCategory';
let TechnicalFormSubcategoryComponent = class TechnicalFormSubcategoryComponent {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        this.canProceedEvent = new EventEmitter();
        this.categoryChange = new EventEmitter();
        this.otherPressed = false;
        this.shortDescription = 'Συντομη περιγραφη (εως 40 χαρ.)';
    }
    ngOnInit() {
        this.categories = RequestedService.getCategoryForService(this.service.id);
        this.setOtherPressed(this.category.id === -1);
        this.value = this.getCategoryDescription();
        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
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
    setTranslationPairs() {
        this.categories.forEach((category) => {
            this.localTranslateService.pairs.push({ key: category.translationKey, callback: (res) => category.name = res });
        });
        this.localTranslateService.pairs.push({ key: 'short-description', callback: (res) => this.shortDescription = res });
    }
};
__decorate([
    Input()
], TechnicalFormSubcategoryComponent.prototype, "service", void 0);
__decorate([
    Output()
], TechnicalFormSubcategoryComponent.prototype, "canProceedEvent", void 0);
__decorate([
    Input()
], TechnicalFormSubcategoryComponent.prototype, "category", void 0);
__decorate([
    Output()
], TechnicalFormSubcategoryComponent.prototype, "categoryChange", void 0);
TechnicalFormSubcategoryComponent = __decorate([
    Component({
        selector: 'app-technical-form-subcategory',
        templateUrl: './technical-form-subcategory.component.html',
        styleUrls: ['./technical-form-subcategory.component.scss'],
    })
], TechnicalFormSubcategoryComponent);
export { TechnicalFormSubcategoryComponent };
//# sourceMappingURL=technical-form-subcategory.component.js.map