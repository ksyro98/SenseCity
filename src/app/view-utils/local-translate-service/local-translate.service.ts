import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageSelectorService} from '../language-selector-service/language-selector.service';

export const DEFAULT_LANGUAGE = window.Intl && typeof window.Intl === 'object'
                                    ? getLanguageFromTag(navigator.language)
                                    : 'en';

@Injectable({
  providedIn: 'root'
})
export class LocalTranslateService {

  language = undefined;
  pairs: {key: string, callback: (s: string) => string}[] = undefined;
  translate: TranslateService;
  // translationSubject = new Subject<string>();

  constructor(private languageSelector: LanguageSelectorService) {
    if (this.pairs === undefined){
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

  changeLanguage(language){
    this.language = language;
    this.languageSelector.setLanguage(language);
    this.translateLanguage();
    // this.translationSubject.next(language);
  }

  translateLanguage(){
    if (this.language === undefined){
      this.initTranslate(DEFAULT_LANGUAGE);
    }
    else{
      this.translate.use(this.language);
      this.initialiseTranslation();
    }
  }

  initialiseTranslation() {
    this.pairs.forEach((pair) =>
        this.translate.get(pair.key).subscribe((res: string) => pair.callback(res)));
  }
}

function getLanguageFromTag(tag: string){
  if (tag.includes('en')){
    return 'en';
  }
  if (tag.includes('el')){
    return 'el';
  }

  return 'en';
}
