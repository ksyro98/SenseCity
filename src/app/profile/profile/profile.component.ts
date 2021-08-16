import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';
import {PROFILE_ELEMENTS} from '../../constants/ProfileElements';
import {ProfileElement} from '../../entities/ProfileElement';
import {TranslateService} from '@ngx-translate/core';
import {stringify} from 'querystring';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {LanguageSelectorService} from '../../view-utils/language-selector-service/language-selector.service';
import {CITIES} from '../../constants/Cities';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  elements: ProfileElement[];
  focus = false;
  // city = 'Πάτρα';

  language = LocalTranslateService.getDefaultLanguage();

  city = CITIES[4];
  profile: string;
  nameTitle: string;
  cityTitle: string;
  languageTitle: string;
  acceptTerms1: string;
  acceptTerms2: string;
  acceptTerms3: string;

  private pairs = [
      {key: 'profile', callback: (res: string) => this.profile = res},
      {key: 'accept-terms-1', callback: (res: string) => this.acceptTerms1 = res},
      {key: 'accept-terms-2', callback: (res: string) => this.acceptTerms2 = res},
      {key: 'accept-terms-3', callback: (res: string) => this.acceptTerms3 = res},
      {key: this.city.cityKey, callback: (res: string) => this.city.name = res}
  ];

  constructor(
      public modalController: ModalController,
      private translate: TranslateService,
      private localTranslateService: LocalTranslateService
  ) {
    this.elements = PROFILE_ELEMENTS;

    this.elements.forEach((element) => {
      this.pairs.push({key: element.translationKey, callback: (res: string) => element.label = res});
    });

    this.pairs.push({key: 'city', callback: (res: string) => this.cityTitle = res});
    this.pairs.push({key: 'language', callback: (res: string) => this.languageTitle = res});

    this.localTranslateService.pairs = this.localTranslateService.pairs.concat(this.pairs);
    this.localTranslateService.translate = translate;

    this.language = this.localTranslateService.language ? this.localTranslateService.language : LocalTranslateService.getDefaultLanguage();
  }

  ngOnInit() {
    this.localTranslateService.initTranslate();
    this.language = this.localTranslateService.language;
  }

  changeLanguage(){
    this.localTranslateService.changeLanguage(this.language);
  }

  async presentCitiesModal(){
    CitiesModalComponent.present(this.modalController, (city) => this.city = city);
  }

}
