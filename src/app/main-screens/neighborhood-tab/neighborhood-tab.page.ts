import { Component, OnInit } from '@angular/core';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {NeighborhoodLogicService} from '../../neighborhood/neighborhood-logic/neighborhood-logic.service';
import {Plugins} from '@capacitor/core';
import {Observable} from 'rxjs';
import {RequestLocation} from '../../entities/RequestLocation';

const { Toast } = Plugins;

@Component({
  selector: 'app-neighborhood-tab',
  templateUrl: './neighborhood-tab.page.html',
  styleUrls: ['./neighborhood-tab.page.scss'],
})
export class NeighborhoodTabPage implements OnInit {

  neighborhoodSegment = 0;
  neighborhood$: Observable<RequestLocation>;

  myNeighborhood = 'Η Γειτονιά μου';
  neighborhood = 'Γειτονιά';
  messages = 'Μηνύματα';
  private neighborhoodUpdatedTxt = 'Η γειτονιά σου ανανεώθηκε!';
  private noEmailErrorTxt = 'Το email δεν έχει οριστεί';
  private unexpectedErrorTxt = 'Ένα λάθος προέκυψε! Παρακαλούμε δοκίμασε ξανά.';
  private neighborhoodDeletedTxt = 'Η γειτονιά σου διαγράφηκε';

  constructor(private logic: NeighborhoodLogicService, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
    this.neighborhood$ = this.logic.getNeighborhood();
  }

  neighborhoodSegmentChanged(event: any){
    this.neighborhoodSegment = +event.detail.value;
  }

  onLocationChange(location){
    this.logic.setLocation(location);
  }

  registerNeighborhood(){
    this.logic.registerNeighborhood().subscribe({
      next: (_) => Toast.show({text: this.neighborhoodUpdatedTxt}),
      error: (err) => {
        console.log(err);
        Toast.show({
          text: err === NeighborhoodLogicService.NO_EMAIL_ERROR ? this.noEmailErrorTxt : this.unexpectedErrorTxt
        });
      }
    });
  }

  unregisterNeighborhood(){
    this.logic.unregisterNeighborhood().subscribe({
      next: (_) => Toast.show({text: this.neighborhoodDeletedTxt}),
      error: (err) => {
        console.log(err);
        Toast.show({
          text: err === NeighborhoodLogicService.NO_EMAIL_ERROR ? this.noEmailErrorTxt : this.unexpectedErrorTxt
        });
      }
    });
  }


  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'my-neighborhood-caps', callback: (res: string) => this.myNeighborhood = res});
    this.localTranslateService.pairs.push({key: 'neighborhood', callback: (res: string) => this.neighborhood = res});
    this.localTranslateService.pairs.push({key: 'messages', callback: (res: string) => this.messages = res});
    this.localTranslateService.pairs.push({key: 'neighborhood-updated', callback: (res: string) => this.neighborhoodUpdatedTxt = res});
    this.localTranslateService.pairs.push({key: 'unexpected-error', callback: (res: string) => this.unexpectedErrorTxt = res});
    this.localTranslateService.pairs.push({key: 'no-email-error', callback: (res: string) => this.noEmailErrorTxt = res});
    this.localTranslateService.pairs.push({key: 'neighborhood-deleted', callback: (res: string) => this.neighborhoodDeletedTxt = res});
  }

}
