import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';
import {ProfileElement} from '../../entities/ProfileElement';
import {TranslateService} from '@ngx-translate/core';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {CITIES} from '../../constants/Cities';
import {ProfileLogicService} from '../profile-logic/profile-logic.service';
import {Observable} from 'rxjs';
import {VerifyModalComponent} from '../verify-modal/verify-modal.component';
import {Plugins} from '@capacitor/core';

const { Toast } = Plugins;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  elements: ProfileElement[];
  focus = false;

  language = LocalTranslateService.getDefaultLanguage();

  city = CITIES[4];
  profile: string;
  nameTitle: string;
  cityTitle: string;
  languageTitle: string;
  acceptTerms1: string;
  acceptTerms2: string;
  acceptTerms3: string;
  notVerified1: string;
  notVerified2: string;
  verify: string;

  readonly emailKey = ProfileElement.EMAIL_KEY;
  readonly phoneKey = ProfileElement.PHONE_KEY;

  private pairs = [
      {key: 'profile', callback: (res: string) => this.profile = res},
      {key: 'accept-terms-1', callback: (res: string) => this.acceptTerms1 = res},
      {key: 'accept-terms-2', callback: (res: string) => this.acceptTerms2 = res},
      {key: 'accept-terms-3', callback: (res: string) => this.acceptTerms3 = res},
      {key: 'not-verified-1', callback: (res: string) => this.notVerified1 = res},
      {key: 'not-verified-2', callback: (res: string) => this.notVerified2 = res},
      {key: 'verify', callback: (res: string) => this.verify = res},
      {key: this.city.cityKey, callback: (res: string) => this.city.name = res}
  ];

  isActive$: Observable<any>;

  constructor(
      public modalController: ModalController,
      private translate: TranslateService,
      private localTranslateService: LocalTranslateService,
      private logic: ProfileLogicService
  ) {
    logic.waitForUser().then((user) => {
      this.elements = ProfileElement.getProfileElementsFromUser(user);

      this.elements.forEach((element) => {
        this.pairs.push({key: element.key, callback: (res: string) => element.label = res});
      });

      this.pairs.push({key: 'city', callback: (res: string) => this.cityTitle = res});
      this.pairs.push({key: 'language', callback: (res: string) => this.languageTitle = res});

      this.localTranslateService.pairs = this.localTranslateService.pairs.concat(this.pairs);
      this.localTranslateService.translate = translate;

      this.language = this.localTranslateService.language
          ? this.localTranslateService.language
          : LocalTranslateService.getDefaultLanguage();

      this.isActive$ = logic.isUserActive();
    });
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

  onFocusLost(key: string, value: string){
    this.logic.setUserValue(key, value);
    this.elements = ProfileElement.getProfileElementsFromUser(this.logic.getUser());
    if (key === ProfileElement.EMAIL_KEY || key === ProfileElement.PHONE_KEY) {
      this.isActive$ = this.logic.isUserActive();
    }
  }

  presentVerifyModal(element: ProfileElement){
    VerifyModalComponent.present(this.modalController, element, (result: boolean) => {
      if (result) {
        this.isActive$ = this.logic.isUserActive();
      }
    });
  }
}
