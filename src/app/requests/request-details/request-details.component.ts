import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {RequestDetailsMapModalComponent} from '../request-details-map-modal/request-details-map-modal.component';
import {RequestedService} from '../../entities/RequestedService';
import {ActivatedRoute} from '@angular/router';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
})
export class RequestDetailsComponent implements OnInit {

  @Input() completed: boolean;

  type = 'Καθαριότητα';
  subtype = 'Κομμένα Κλαδιά';
  code = 'Κωδικός';
  status = 'Κατάσταση';
  statusValue = 'Επιβεβαιωμένο';
  reported = 'Αναφορά';
  reportDate = '29 Νοε 2020, 23:04';
  responsible = 'Ανάθεση';
  department = 'Τμήμα επίλυσης προβλημάτων';
  comments = 'Παρατηρήσεις';
  commentValue = 'Est aut quia qui aliquid non. Dolores qui sed quo. Omnis ut asperiores eos sequi omnis ab. Sint similique inventore ' +
      'quidem in magni cupiditate alias.';
  rating = 'Αξιολόγηση';
  locationName1 = 'ΠΕΟ Πάτρας Πύργου 250';
  locationName2 = 'Βραχναίικα 250 02, Ελλάδα';

  locationName = this.locationName1 + '<br>' + this.locationName2;

  constructor(
      public modalController: ModalController,
      private router: ActivatedRoute,
      private localTranslateService: LocalTranslateService
  ) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    // we use === 'true' because the parameter passed is a string
    this.router.queryParams.subscribe(params => this.completed = params.completed === 'true');
    this.localTranslateService.translateLanguage();
  }

  async presentMapModal(){
    const modal = await this.modalController.create({
      component: RequestDetailsMapModalComponent,
      cssClass: 'general-modal-class',
      componentProps: {
        lat: 38.246242,
        long: 21.7350847,
        locationName: this.locationName
      }
    });
    return await modal.present();
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: '_type-rds', callback: (res: string) => this.type = res});
    this.localTranslateService.pairs.push({key: '_subtype-rds', callback: (res: string) => this.subtype = res});
    this.localTranslateService.pairs.push({key: 'code-rds', callback: (res: string) => this.code = res});
    this.localTranslateService.pairs.push({key: 'status-rds', callback: (res: string) => this.status = res});
    this.localTranslateService.pairs.push({key: '_status-value-rds', callback: (res: string) => this.statusValue = res});
    this.localTranslateService.pairs.push({key: 'reported-rds', callback: (res: string) => this.reported = res});
    this.localTranslateService.pairs.push({key: '_report-date-rds', callback: (res: string) => this.reportDate = res});
    this.localTranslateService.pairs.push({key: 'responsible-rds', callback: (res: string) => this.responsible = res});
    this.localTranslateService.pairs.push({key: '_department-rds', callback: (res: string) => this.department = res});
    this.localTranslateService.pairs.push({key: 'comments-rds', callback: (res: string) => this.comments = res});
    this.localTranslateService.pairs.push({key: '_comment-value-rds', callback: (res: string) => this.commentValue = res});
    this.localTranslateService.pairs.push({key: 'rating-rds', callback: (res: string) => this.rating = res});
    this.localTranslateService.pairs.push({key: '_location-name-1-rds', callback: (res: string) => {
        this.locationName1 = res;
        this.locationName = this.locationName1 + '<br>' + this.locationName2;
        return null;
      }});
    this.localTranslateService.pairs.push({key: '_location-name-2-rds', callback: (res: string) => {
        this.locationName2 = res;
        this.locationName = this.locationName1 + '<br>' + this.locationName2;
        return null;
      }});
  }
}
