import {Component, Input, OnInit} from '@angular/core';
import {Recommendation} from '../../../entities/Recommendation';
import {LocalTranslateService} from '../../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-recommendation-card',
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.scss'],
})
export class RecommendationCardComponent implements OnInit {

  @Input() recommendation: Recommendation;

  statusTxt = 'Κατάσταση';
  addressTxt = 'Διεύθυνση';

  constructor(private localTranslateService: LocalTranslateService) { }

  ngOnInit() {
    this.setTranslationPairs();
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'status', callback: (res: string) => this.statusTxt = res});
    this.localTranslateService.pairs.push({key: 'address', callback: (res: string) => this.addressTxt = res});
  }
}
