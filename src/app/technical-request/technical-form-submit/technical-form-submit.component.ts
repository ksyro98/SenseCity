import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {TechnicalRequest} from '../../entities/TechnicalRequest';
import {getShortString} from '../../utils/string-utils';

@Component({
  selector: 'app-technical-form-submit',
  templateUrl: './technical-form-submit.component.html',
  styleUrls: ['./technical-form-submit.component.scss'],
})
export class TechnicalFormSubmitComponent implements OnInit {

  submit = 'Υποβολή';
  category = 'Κατηγορία';
  cleaning = 'Καθαριότητα';
  request = 'Αίτημα';
  cutBranches = 'Κομμένα Κλαδιά';
  comments = 'Σχόλια';
  commentsValue = 'Architecto commodi quod non...';
  namedRequest = 'Επώνυμη αναφορά';
  acceptTerms1 = 'Αποδέχομαι τους ';
  acceptTerms2 = 'όρους χρήσης';
  acceptTerms3 = ' του SenseCity.';

  @Input() finalRequest: TechnicalRequest;
  @Input() namedClicked: boolean;
  @Input() termsAcceptedClicked: boolean;
  @Output() imageDataUrlChange = new EventEmitter<string>();
  @Output() namedClickedChange = new EventEmitter<boolean>();
  @Output() termsAcceptedClickedChange = new EventEmitter<boolean>();

  constructor(private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  getUserComments(): string{
    return getShortString(this.finalRequest.comments, 40);
  }

  onNamedClickChanged(){
    this.namedClickedChange.emit(this.namedClicked);
  }

  onTermsAcceptedClicked(){
    this.termsAcceptedClickedChange.emit(this.termsAcceptedClicked);
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'submit', callback: (res: string) => this.submit = res});
    this.localTranslateService.pairs.push({key: 'category', callback: (res: string) => this.category = res});
    this.localTranslateService.pairs.push({key: '_cleaning-text', callback: (res: string) => this.cleaning = res});
    this.localTranslateService.pairs.push({key: 'request', callback: (res: string) => this.request = res});
    this.localTranslateService.pairs.push({key: 'cut-branches', callback: (res: string) => this.cutBranches = res});
    this.localTranslateService.pairs.push({key: 'comments', callback: (res: string) => this.comments = res});
    this.localTranslateService.pairs.push({key: '_comments-value', callback: (res: string) => this.commentsValue = res});
    this.localTranslateService.pairs.push({key: 'named-request', callback: (res: string) => this.namedRequest = res});
    this.localTranslateService.pairs.push({key: 'accept-terms-1', callback: (res: string) => this.acceptTerms1 = res});
    this.localTranslateService.pairs.push({key: 'accept-terms-2', callback: (res: string) => this.acceptTerms2 = res});
    this.localTranslateService.pairs.push({key: 'accept-terms-3', callback: (res: string) => this.acceptTerms3 = res});
  }
}
