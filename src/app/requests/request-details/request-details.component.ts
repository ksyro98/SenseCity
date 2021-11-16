import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {RequestDetailsMapModalComponent} from '../request-details-map-modal/request-details-map-modal.component';
import {ActivatedRoute} from '@angular/router';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {RequestsLogicService} from '../requests-logic/requests-logic.service';
import {Observable} from 'rxjs';
import {TechnicalRequest} from '../../entities/TechnicalRequest';
import {getDayText, getMonthText} from '../../utils/date-utils';
import {TECHNICAL_SERVICES_LIST} from '../../entities/Service';
import {RequestLocation} from '../../entities/RequestLocation';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
})
export class RequestDetailsComponent implements OnInit {

  @Input() completed: boolean;
  @Input() alias: string;
  issue$: Observable<TechnicalRequest>;

  code = 'Κωδικός';
  status = 'Κατάσταση';
  ratingTxt = 'Αξιολόγηση';
  requestTxt = 'Αίτημα';
  reported = 'Αναφορά';
  responsible = 'Ανάθεση';
  comments = 'Παρατηρήσεις';
  private inProgressTxt = 'Σε Εξέλειξη';
  private confirmedTxt = 'Επιβεβαιώθηκε';
  private resolvedTxt = 'Επιλύθηκε';
  private unknownTxt = 'Άγνωστο';
  monthTxt = { name: 'Γεν.', translationKey: 'month-1' };
  dayTxt = { name: 'Δευτέρα', translationKey: 'day-1' };
  serviceTxt = { name: 'Καθαριότητα', translationKey: 'garbage' };

  constructor(
      public modalController: ModalController,
      private router: ActivatedRoute,
      private localTranslateService: LocalTranslateService,
      private logic: RequestsLogicService
  ) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    // we use === 'true' because the parameter passed is a string
    this.router.queryParams.subscribe(params => {
      this.alias = params.alias;
      this.completed = params.completed === 'true';
    });
    this.localTranslateService.translateLanguage();
    this.issue$ = this.logic.getFullIssue(this.alias);
  }

  async presentMapModal(location: RequestLocation, issueAddress: string){
    const modal = await this.modalController.create({
      component: RequestDetailsMapModalComponent,
      cssClass: 'general-modal-class',
      componentProps: {
        lat: location.coordinates[1],
        long: location.coordinates[0],
        locationName: issueAddress
      }
    });
    return await modal.present();
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

  getCommentsText(comments: string){
    return comments.length !== 0 ? comments : '-';
  }

  getDateText(date: string): string{
    const parts = date.split(' ');
    const timeParts = parts[4].split(':');
    const time = `${timeParts[0]}:${timeParts[1]}`;

    const day = parts[0];
    const month = parts[1];
    this.dayTxt = getDayText(day);
    this.monthTxt = getMonthText(month);

    return `${this.dayTxt.name}, ${parts[2]} ${this.monthTxt.name} ${parts[3]} (${time})`;
  }

  getServiceText(service: string): string{
    const fullService = TECHNICAL_SERVICES_LIST.filter((e) => e.translationKey === service)[0];
    this.serviceTxt = {
      name: fullService.name,
      translationKey: fullService.translationKey
    };
    return this.serviceTxt.name;
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'code-rds', callback: (res: string) => this.code = res});
    this.localTranslateService.pairs.push({key: 'status-rds', callback: (res: string) => this.status = res});
    this.localTranslateService.pairs.push({key: 'reported-rds', callback: (res: string) => this.reported = res});
    this.localTranslateService.pairs.push({key: 'responsible-rds', callback: (res: string) => this.responsible = res});
    this.localTranslateService.pairs.push({key: 'comments-rds', callback: (res: string) => this.comments = res});
    this.localTranslateService.pairs.push({key: 'rating-rds', callback: (res: string) => this.ratingTxt = res});
    this.localTranslateService.pairs.push({key: 'request', callback: (res: string) => this.requestTxt = res});
    this.localTranslateService.pairs.push({key: 'in-progress-lc', callback: (res: string) => this.inProgressTxt = res});
    this.localTranslateService.pairs.push({key: 'confirmed', callback: (res: string) => this.confirmedTxt = res});
    this.localTranslateService.pairs.push({key: 'resolved', callback: (res: string) => this.resolvedTxt = res});
    this.localTranslateService.pairs.push({key: 'unknown', callback: (res: string) => this.unknownTxt = res});
    this.localTranslateService.pairs.push({key: this.monthTxt.translationKey, callback: (res: string) => this.monthTxt.name = res});
    this.localTranslateService.pairs.push({key: this.dayTxt.translationKey, callback: (res: string) => this.dayTxt.name = res});
    this.localTranslateService.pairs.push({key: this.serviceTxt.translationKey, callback: (res: string) => this.serviceTxt.name = res});
  }
}
