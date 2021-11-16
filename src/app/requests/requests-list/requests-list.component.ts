import {Component, Input, OnInit} from '@angular/core';
import {RequestsLogicService} from '../requests-logic/requests-logic.service';
import {Observable} from 'rxjs';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {RequestSummary} from '../../entities/RequestSummary';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.scss'],
})
export class RequestsListComponent implements OnInit {

  @Input() completed: boolean;
  requests$: Observable<RequestSummary[]>;

  noRequestsTxt1 = 'There are no ';
  completedTxt = 'completed';
  activeTxt = 'active';
  noRequestsTxt2 = ' requests';

  constructor(private logic: RequestsLogicService, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.requests$ = this.completed ? this.logic.getCompletedIssues() : this.logic.getActiveIssues();
    this.localTranslateService.translateLanguage();
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'no-requests-1', callback: (res: string) => this.noRequestsTxt1 = res});
    this.localTranslateService.pairs.push({key: 'no-requests-2', callback: (res: string) => this.noRequestsTxt2 = res});
    this.localTranslateService.pairs.push({key: 'completed-lc', callback: (res: string) => this.completedTxt = res});
    this.localTranslateService.pairs.push({key: 'active', callback: (res: string) => this.activeTxt = res});
  }
}
