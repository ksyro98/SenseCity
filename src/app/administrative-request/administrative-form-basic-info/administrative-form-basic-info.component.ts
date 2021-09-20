import { Component, OnInit } from '@angular/core';
import {PROFILE_ELEMENTS} from '../../constants/ProfileElements';
import {ProfileElement} from '../../entities/ProfileElement';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-administrative-form-basic-info',
  templateUrl: './administrative-form-basic-info.component.html',
  styleUrls: ['./administrative-form-basic-info.component.scss'],
})
export class AdministrativeFormBasicInfoComponent implements OnInit {

  elements: ProfileElement[];

  basicInformation = 'Βασικές πληροφορίες';
  saveChanges = 'Αποθήκευση αλλαγών στο προφίλ μου.';

  constructor(private localTranslateService: LocalTranslateService) {
    this.elements = PROFILE_ELEMENTS;
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  private setTranslationPairs(){
    this.elements.forEach((element) => {
      this.localTranslateService.pairs.push({key: element.key, callback: (res: string) => element.label = res});
    });
    this.localTranslateService.pairs.push({key: 'basic-information', callback: (res: string) => this.basicInformation = res});
    this.localTranslateService.pairs.push({key: 'save-changes', callback: (res: string) => this.saveChanges = res});
  }
}


