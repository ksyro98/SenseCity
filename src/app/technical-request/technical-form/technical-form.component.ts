import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {RequestedService} from '../../entities/RequestedService';
import {TechnicalRequest} from '../../entities/TechnicalRequest';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-technical-form',
  templateUrl: './technical-form.component.html',
  styleUrls: ['./technical-form.component.scss'],
})

export class TechnicalFormComponent implements OnInit {

  public request: TechnicalRequest;
  // public service: RequestedService;
  public canProceed = true;
  public currentStep = 0;

  newRequest = 'Νέα Αίτηση';

  constructor(private router: ActivatedRoute, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();

    this.router.queryParams.subscribe(params => {
      const service = {
        id: parseInt(params.service_id, 10),
        name: params.service_name,
        icon: params.service_iconm,
        translationKey: params.service_translation_key
      };

      const category = RequestedService.getCategoryForService(service.id)[0];

      this.request = {
        service,
        category,
        comments: '',
        image: '',
        location: '',
        named: false
      };

    });
  }

  setCanProceed(canProceed: boolean){
    this.canProceed = canProceed;
  }

  setCurrentStep(currentStep: number){
    this.currentStep = currentStep;
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'new-request', callback: (res: string) => this.newRequest = res});
  }
}
