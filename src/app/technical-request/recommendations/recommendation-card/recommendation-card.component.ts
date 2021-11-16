import {Component, Input, OnInit} from '@angular/core';
import {Recommendation} from '../../../entities/Recommendation';
import {LocalTranslateService} from '../../../view-utils/local-translate-service/local-translate.service';
import {TechnicalRequest} from '../../../entities/TechnicalRequest';

@Component({
  selector: 'app-recommendation-card',
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.scss'],
})
export class RecommendationCardComponent implements OnInit {

  @Input() recommendation: Recommendation;

  statusTxt = 'Κατάσταση';
  addressTxt = 'Διεύθυνση';
  private inProgressTxt = 'Σε Εξέλειξη';
  private confirmedTxt = 'Επιβεβαιώθηκε';
  private resolvedTxt = 'Επιλύθηκε';
  private unknownTxt = 'Άγνωστο';

  constructor(private localTranslateService: LocalTranslateService) { }

  ngOnInit() {
    this.setTranslationPairs();
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

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'status', callback: (res: string) => this.statusTxt = res});
    this.localTranslateService.pairs.push({key: 'address', callback: (res: string) => this.addressTxt = res});
    this.localTranslateService.pairs.push({key: 'in-progress-lc', callback: (res: string) => this.inProgressTxt = res});
    this.localTranslateService.pairs.push({key: 'confirmed', callback: (res: string) => this.confirmedTxt = res});
    this.localTranslateService.pairs.push({key: 'resolved', callback: (res: string) => this.resolvedTxt = res});
    this.localTranslateService.pairs.push({key: 'unknown', callback: (res: string) => this.unknownTxt = res});
  }
}
