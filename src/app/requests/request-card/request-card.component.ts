import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {

  @Input() isLast: boolean;
  @Input() completed: boolean;
  selectedStars = -1;

  text1 = 'Το αίτημα σας (';
  text2 = ') με κωδικό #';
  text3 = 'είναι σε εξέλειξη';
  text4 = ' ολοκληρώθηκε.';
  status = 'Κατάσταση: ';
  value1 = 'Καθαριότητα';
  value2 = '47123';
  value3 = 'Επιβεβαιωμένο';

  constructor(private router: Router, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  areStarsPressed(){
    return !(this.selectedStars === -1);
  }

  navigateToDetailsScreen(){
    if (this.areStarsPressed()){
      this.selectedStars = -1;
      return;
    }
    this.router.navigate(['/request-details'], {queryParams: {completed: this.completed}});
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'text-request-card-1', callback: (res: string) => this.text1 = res});
    this.localTranslateService.pairs.push({key: 'text-request-card-2', callback: (res: string) => this.text2 = res});
    this.localTranslateService.pairs.push({key: 'text-request-card-3', callback: (res: string) => this.text3 = res});
    this.localTranslateService.pairs.push({key: 'text-request-card-4', callback: (res: string) => this.text4 = res});
    this.localTranslateService.pairs.push({key: 'status-request-card', callback: (res: string) => this.status = res});
    this.localTranslateService.pairs.push({key: '_value-request-card-1', callback: (res: string) => this.value1 = res});
    this.localTranslateService.pairs.push({key: '_value-request-card-2', callback: (res: string) => this.value2 = res});
    this.localTranslateService.pairs.push({key: '_value-request-card-3', callback: (res: string) => this.value3 = res});
  }
}
