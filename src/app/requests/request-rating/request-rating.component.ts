import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-request-rating',
  templateUrl: './request-rating.component.html',
  styleUrls: ['./request-rating.component.scss'],
})
export class RequestRatingComponent implements OnInit {

  stars = -1;

  type = 'Καθαριότητα';
  subtype = 'Κομμένα Κλαδιά';
  wasRequestCompleted = 'Ολοκληρώθηκε το αίτημα σας;';
  yes = 'Ναι';
  no = 'Όχι';
  commentsPlaceholder = 'Σχόλια (προαιρετικό)';
  submit = 'Υποβολή';

  constructor(private location: Location, private router: ActivatedRoute, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => this.stars = Number(params.stars));
    this.localTranslateService.translateLanguage();
  }

  public back(){
    this.location.back();
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: '_type-rrs', callback: (res: string) => this.type = res});
    this.localTranslateService.pairs.push({key: '_subtype-rrs', callback: (res: string) => this.subtype = res});
    this.localTranslateService.pairs.push({key: 'was-request-completed-rrs', callback: (res: string) => this.wasRequestCompleted = res});
    this.localTranslateService.pairs.push({key: 'yes-rrs', callback: (res: string) => this.yes = res});
    this.localTranslateService.pairs.push({key: 'no-rrs', callback: (res: string) => this.no = res});
    this.localTranslateService.pairs.push({key: 'comments-placeholder-rrs', callback: (res: string) => this.commentsPlaceholder = res});
    this.localTranslateService.pairs.push({key: 'submit-rrs', callback: (res: string) => this.submit = res});
  }
}
