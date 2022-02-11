import { Component, OnInit } from '@angular/core';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {Observable} from 'rxjs';
import {NeighborhoodMessage} from '../../entities/NeighborhoodMessage';
import {NeighborhoodLogicService} from '../neighborhood-logic/neighborhood-logic.service';

@Component({
  selector: 'app-neighborhood-messages',
  templateUrl: './neighborhood-messages.component.html',
  styleUrls: ['./neighborhood-messages.component.scss'],
})
export class NeighborhoodMessagesComponent implements OnInit {

  noMessagesText = 'Δυστυχώς δεν βρέθηκαν μηνύματα στη θυρίδα σας.';
  messages$: Observable<NeighborhoodMessage[]>;

  constructor(private logic: NeighborhoodLogicService, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
    this.messages$ = this.logic.getMessages();
    this.messages$.subscribe(x => console.log(x));
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'no-messages-text', callback: (res: string) => this.noMessagesText = res});
  }

}
