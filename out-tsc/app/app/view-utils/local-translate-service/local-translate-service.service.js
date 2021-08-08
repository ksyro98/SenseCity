import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LocalTranslateServiceService = class LocalTranslateServiceService {
    // pairs: [{key: string, callback: (s: string) => void}];
    constructor(pairs, translate) {
        this.pairs = pairs;
        this.translate = translate;
        this.language = 'el';
    }
    initTranslate(language) {
        this.translate.setDefaultLang('el');
        if (language) {
            this.language = language;
        }
        else {
            this.language = 'el';
        }
        this.translateLanguage();
    }
    changeLanguage() {
        this.translateLanguage();
    }
    translateLanguage() {
        this.translate.use(this.language);
        this.initialiseTranslation();
    }
    initialiseTranslation() {
        this.pairs.forEach((pair) => {
            this.translate.get(pair.key).subscribe((res) => pair.callback(res));
        });
        // this.translate.get('name').subscribe((res: string) => {
        //   this.nameTitle = res;
        // });
        // this.translate.get('city').subscribe((res: string) => {
        //   this.cityTitle = res;
        // });
        // this.translate.get('language').subscribe((res: string) => this.languageTitle = res);
    }
};
LocalTranslateServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LocalTranslateServiceService);
export { LocalTranslateServiceService };
//# sourceMappingURL=local-translate-service.service.js.map