import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdministrativeRequest} from '../../entities/AdministrativeRequest';
import {Service} from '../../entities/Service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-administrative-form',
  templateUrl: './administrative-form.component.html',
  styleUrls: ['./administrative-form.component.scss'],
})
export class AdministrativeFormComponent implements OnInit {

  request: AdministrativeRequest;
  currentStep = 0;

  newRequest = 'Νέα Αίτημα';

  constructor(private router: ActivatedRoute, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();

    this.router.queryParams.subscribe(params => {
      const service: Service = {
        id: parseInt(params.service_id, 10),
        name: params.service_name,
        icon: '',
        translationKey: params.service_translation_key
      };
    });
  }

  setNextStep(nextStep: number){
    this.currentStep = nextStep;
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'new-request', callback: (res: string) => this.newRequest = res});
  }
}

