import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageSelectorService} from '../language-selector-service/language-selector.service';
import {StorageTranslationService} from '../../storage-utils/storage-translation-service/storage-translation.service';

@Injectable({
  providedIn: 'root'
})
export class LocalTranslateService {

  private static defaultLanguage = window.Intl && typeof window.Intl === 'object'
      ? getLanguageFromTag(navigator.language)
      : 'en';

  language = undefined;
  pairs: {key: string, callback: (s: string) => string}[] = undefined;
  translate: TranslateService;
  // translationSubject = new Subject<string>();


  static getDefaultLanguage(): string{
    return LocalTranslateService.defaultLanguage;
  }

  constructor(private languageSelector: LanguageSelectorService, private storageTranslation: StorageTranslationService) {
    if (this.pairs === undefined){
      this.pairs = [];
    }
  }

  async initTranslate() {
    this.translate.setDefaultLang(LocalTranslateService.defaultLanguage);
    const language = await this.storageTranslation.getLanguage();
    if (language) {
      this.language = language;
      LocalTranslateService.defaultLanguage = language;
    }
    else {
      this.language = LocalTranslateService.defaultLanguage;
    }
    this.translateLanguage();
  }

  changeLanguage(language){
    this.language = language;
    this.languageSelector.setLanguage(language);
    this.translateLanguage();
    this.storageTranslation.setLanguage(language);
  }

  translateLanguage(){
    if (this.language === undefined){
      this.initTranslate();
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
