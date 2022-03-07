var LocalTranslateService_1;
import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LocalTranslateService = LocalTranslateService_1 = class LocalTranslateService {
    constructor(languageSelector, storageTranslation) {
        this.languageSelector = languageSelector;
        this.storageTranslation = storageTranslation;
        this.language = undefined;
        this.pairs = undefined;
        if (this.pairs === undefined) {
            this.pairs = [];
        }
    }
    static getDefaultLanguage() {
        return LocalTranslateService_1.defaultLanguage;
    }
    initTranslate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.translate.setDefaultLang(LocalTranslateService_1.defaultLanguage);
            const language = yield this.storageTranslation.getLanguage();
            if (language) {
                this.language = language;
                LocalTranslateService_1.defaultLanguage = language;
            }
            else {
                this.language = LocalTranslateService_1.defaultLanguage;
            }
            this.translateLanguage();
        });
    }
    changeLanguage(language) {
        this.language = language;
        this.languageSelector.setLanguage(language);
        this.translateLanguage();
        this.storageTranslation.setLanguage(language);
    }
    translateLanguage() {
        if (this.language === undefined) {
            this.initTranslate();
        }
        else {
            this.translate.use(this.language);
            this.initialiseTranslation();
        }
    }
    initialiseTranslation() {
        this.pairs.forEach((pair) => {
            if (pair.key) {
                this.translate.get(pair.key).subscribe((res) => pair.callback(res));
            }
        });
    }
};
LocalTranslateService.defaultLanguage = window.Intl && typeof window.Intl === 'object'
    ? getLanguageFromTag(navigator.language)
    : 'en';
LocalTranslateService = LocalTranslateService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LocalTranslateService);
export { LocalTranslateService };
function getLanguageFromTag(tag) {
    if (tag.includes('en')) {
        return 'en';
    }
    if (tag.includes('el')) {
        return 'el';
    }
    return 'en';
}
//# sourceMappingURL=local-translate.service.js.map