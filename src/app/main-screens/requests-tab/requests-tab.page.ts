import { Component, OnInit } from '@angular/core';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-requests-tab',
  templateUrl: './requests-tab.page.html',
  styleUrls: ['./requests-tab.page.scss'],
})
export class RequestsTabPage implements OnInit {

  public completedRequests = 0; // 0 --> not completed, 1 --> completed

  inProgress = 'Σε εξέλειξη';
  completed = 'Ολοκληρωμένες';

  constructor(private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  public requestsSegmentChanged(event: any){
    this.completedRequests = event.detail.value;
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'in-progress', callback: (res: string) => this.inProgress = res});
    this.localTranslateService.pairs.push({key: 'completed', callback: (res: string) => this.completed = res});
  }
}
