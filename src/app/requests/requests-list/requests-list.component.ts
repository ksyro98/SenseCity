import {Component, Input, NgZone, OnInit} from '@angular/core';
import {RequestsLogicService} from '../requests-logic/requests-logic.service';
import {Observable} from 'rxjs';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {RequestSummary} from '../../entities/RequestSummary';
import {Plugins} from '@capacitor/core';

const { Toast } = Plugins;

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
  emailPhoneNotSetTxt = 'Email and phone number aren\'t set';
  refreshTxt = 'Refresh';

  constructor(
      private logic: RequestsLogicService,
      private localTranslateService: LocalTranslateService,
  ) {
    this.setTranslationPairs();
    this.localTranslateService.translateLanguage();
  }

  ngOnInit() {
    this.updateRequests();
  }

  updateRequests(){
    this.requests$ = undefined;
    this.requests$ = this.completed ? this.logic.getCompletedIssues() : this.logic.getActiveIssues();

    this.showDetailsWarningIfNeeded();
  }

  private showDetailsWarningIfNeeded(){
    if (this.logic.hasNoEmailAndPhone()){
      Toast.show({text: this.emailPhoneNotSetTxt});
    }
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'no-requests-1', callback: (res: string) => this.noRequestsTxt1 = res});
    this.localTranslateService.pairs.push({key: 'no-requests-2', callback: (res: string) => this.noRequestsTxt2 = res});
    this.localTranslateService.pairs.push({key: 'completed-lc', callback: (res: string) => this.completedTxt = res});
    this.localTranslateService.pairs.push({key: 'active', callback: (res: string) => this.activeTxt = res});
    this.localTranslateService.pairs.push({key: 'email-phone-not-set', callback: (res: string) => this.emailPhoneNotSetTxt = res});
    this.localTranslateService.pairs.push({key: 'refresh', callback: (res: string) => this.refreshTxt = res});
  }
}
