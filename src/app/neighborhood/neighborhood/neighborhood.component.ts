import { Component, OnInit } from '@angular/core';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-neighborhood',
  templateUrl: './neighborhood.component.html',
  styleUrls: ['./neighborhood.component.scss'],
})
export class NeighborhoodComponent implements OnInit {

  neighborhoodSegment = 0;

  myNeighborhood = 'Η Γειτονιά μου';
  neighborhood = 'Γειτονιά';
  messages = 'Μηνύματα';

  constructor(private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  neighborhoodSegmentChanged(event: any){
    this.neighborhoodSegment = event.detail.value;
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'my-neighborhood-caps', callback: (res: string) => this.myNeighborhood = res});
    this.localTranslateService.pairs.push({key: 'neighborhood', callback: (res: string) => this.neighborhood = res});
    this.localTranslateService.pairs.push({key: 'messages', callback: (res: string) => this.messages = res});
  }
}
