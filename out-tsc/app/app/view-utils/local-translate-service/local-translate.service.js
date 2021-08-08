import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export const DEFAULT_LANGUAGE = window.Intl && typeof window.Intl === 'object'
    ? getLanguageFromTag(navigator.language)
    : 'en';
let LocalTranslateService = class LocalTranslateService {
    // translationSubject = new Subject<string>();
    constructor(languageSelector) {
        this.languageSelector = languageSelector;
        this.language = undefined;
        this.pairs = undefined;
        if (this.pairs === undefined) {
            this.pairs = [];
        }
    }
    initTranslate(language) {
        this.translate.setDefaultLang(DEFAULT_LANGUAGE);
        if (language) {
            this.language = language;
        }
        else {
            this.language = DEFAULT_LANGUAGE;
        }
        this.translateLanguage();
    }
    changeLanguage(language) {
        this.language = language;
        this.languageSelector.setLanguage(language);
        this.translateLanguage();
        // this.translationSubject.next(language);
    }
    translateLanguage() {
        if (this.language === undefined) {
            this.initTranslate(DEFAULT_LANGUAGE);
        }
        else {
            this.translate.use(this.language);
            this.initialiseTranslation();
        }
    }
    initialiseTranslation() {
        this.pairs.forEach((pair) => this.translate.get(pair.key).subscribe((res) => pair.callback(res)));
    }
};
LocalTranslateService = __decorate([
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