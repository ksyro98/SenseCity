import {Component, OnInit} from '@angular/core';
import {LocalTranslateService} from '../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  href = '';

  notifications = 'Ειδοποιήσεις';
  home = 'Αρχική';
  requests = 'Αιτήσεις';
  more = 'Περισσότερα';
  myNeighborhood = 'Γειτονιά';

  constructor(private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  private setTranslationPairs() {
    this.localTranslateService.pairs.push({key: 'notifications-bottom-nav', callback: (res: string) => this.notifications = res});
    this.localTranslateService.pairs.push({key: 'home-bottom-nav', callback: (res: string) => this.home = res});
    this.localTranslateService.pairs.push({key: 'requests-bottom-nav', callback: (res: string) => this.requests = res});
    this.localTranslateService.pairs.push({key: 'more-bottom-nav', callback: (res: string) => this.more = res});
    this.localTranslateService.pairs.push({key: 'neighborhood', callback: (res: string) => this.myNeighborhood = res});
  }
}
