import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageSelectorService {

  private language = 'el';

  constructor() { }

  setLanguage(language: string){
    this.language = language;
  }

  getLanguage(): string{
    return this.language;
  }
}
