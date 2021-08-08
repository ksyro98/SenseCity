import { Component, OnInit } from '@angular/core';
import {CITIES} from '../../constants/Cities';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-more-tab',
  templateUrl: './more-tab.page.html',
  styleUrls: ['./more-tab.page.scss'],
})
export class MoreTabPage implements OnInit {

  // We will retrieve this value from the user's selected city.
  city = CITIES[4];

  discussions = 'Διαβουλεύσεις';
  myNeighborhood = 'Η γειτονιά μου';
  map = 'Χάρτης';
  profile = 'Προφίλ';

  constructor(private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'discussions', callback: (res: string) => this.discussions = res});
    this.localTranslateService.pairs.push({key: 'my-neighborhood', callback: (res: string) => this.myNeighborhood = res});
    this.localTranslateService.pairs.push({key: 'map', callback: (res: string) => this.map = res});
    this.localTranslateService.pairs.push({key: 'profile', callback: (res: string) => this.profile = res});
  }
}
