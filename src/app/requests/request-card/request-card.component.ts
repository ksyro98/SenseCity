import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {TechnicalRequest} from '../../entities/TechnicalRequest';
import {RequestSummary} from '../../entities/RequestSummary';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {

  @Input() isLast: boolean;
  @Input() completed: boolean;
  // @Input() subServiceName: string;
  // @Input() id: number;
  // @Input() alias: string;
  // @Input() status: string;
  // @Input() address: string;
  @Input() request: RequestSummary;
  selectedStars = -1;

  private inProgressTxt = 'Σε Εξέλειξη';
  private confirmedTxt = 'Επιβεβαιώθηκε';
  private resolvedTxt = 'Επιλύθηκε';
  private unknownTxt = 'Άγνωστο';

  constructor(private router: Router, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  getStatusText(status: string){
    switch (status) {
      case TechnicalRequest.IN_PROGRESS:
        return this.inProgressTxt;
      case TechnicalRequest.CONFIRMED:
        return this.confirmedTxt;
      case TechnicalRequest.RESOLVED:
        return this.resolvedTxt;
    }

    return this.unknownTxt;
  }

  areStarsPressed(){
    return !(this.selectedStars === -1);
  }

  navigateToDetailsScreen(){
    if (this.areStarsPressed()){
      this.selectedStars = -1;
      return;
    }

    this.router.navigate(['/request-details'], {queryParams: {alias: this.request.alias, completed: this.completed}});
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'in-progress-lc', callback: (res: string) => this.inProgressTxt = res});
    this.localTranslateService.pairs.push({key: 'confirmed', callback: (res: string) => this.confirmedTxt = res});
    this.localTranslateService.pairs.push({key: 'resolved', callback: (res: string) => this.resolvedTxt = res});
    this.localTranslateService.pairs.push({key: 'unknown', callback: (res: string) => this.unknownTxt = res});
  }
}
