import { Component, OnInit } from '@angular/core';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-neighborhood-messages',
  templateUrl: './neighborhood-messages.component.html',
  styleUrls: ['./neighborhood-messages.component.scss'],
})
export class NeighborhoodMessagesComponent implements OnInit {

  noMessagesText = 'Δυστυχώς δεν βρέθηκαν μηνύματα στη θυρίδα σας.';

  constructor(private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'no-messages-text', callback: (res: string) => this.noMessagesText = res});
  }

}
