import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LanguageSelectorService = class LanguageSelectorService {
    constructor() {
        this.language = 'el';
    }
    setLanguage(language) {
        this.language = language;
    }
    getLanguage() {
        return this.language;
    }
};
LanguageSelectorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LanguageSelectorService);
export { LanguageSelectorService };
//# sourceMappingURL=language-selector.service.js.map