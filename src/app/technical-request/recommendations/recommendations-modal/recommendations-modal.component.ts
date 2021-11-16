import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Recommendation} from '../../../entities/Recommendation';
import {NetworkUtilsService} from '../../../network-utils/network-utils.service';
import {UserService} from '../../../user-service/user.service';
import {normalizeExtraEntryPoints} from '@angular-devkit/build-angular/src/webpack/utils/helpers';
import {Subscriber} from 'rxjs';
import {LocalTranslateService} from '../../../view-utils/local-translate-service/local-translate.service';


@Component({
  selector: 'app-recommendations-modal',
  templateUrl: './recommendations-modal.component.html',
  styleUrls: ['./recommendations-modal.component.scss'],
})
export class RecommendationsModalComponent implements OnInit {

  @Input() recommendations: Recommendation[];
  loading = false;

  recommendationsTxt = 'Προτάσεις';
  otherRequestsTxt = 'Μήπως εννοείς ένα από τα παρακάτω αιτήματα;';
  noTxt = 'Όχι';

  constructor(
      public modalController: ModalController,
      private networkUtils: NetworkUtilsService,
      private userService: UserService,
      private localTranslateService: LocalTranslateService
  ) { }

  static async present(
      modalController: ModalController,
      recommendationsList: Recommendation[],
      onDismiss?: (recommendation: Recommendation) => void
  ){
    const modal = await modalController.create({
      component: RecommendationsModalComponent,
      cssClass: 'general-modal-class',
      componentProps: {
        recommendations: recommendationsList,
      }
    });

    modal.onDidDismiss()
        .then((data) => {
          if (data.data !== null) {
            onDismiss(data.data);
          }
        });

    return await modal.present();
  }

  ngOnInit() {
    this.setTranslationPairs();
    this.localTranslateService.translateLanguage();
  }

  cardClicked(recommendation: Recommendation){
    if (!recommendation){
      this.modalController.dismiss(undefined);
      return;
    }

    this.loading = true;
    this.networkUtils.subscribeToIssue(recommendation.id, this.userService.getUser())
        .subscribe(new Subscriber({
              next: _ => this.modalController.dismiss(recommendation),
              error: error => {
                console.log(error);
                this.modalController.dismiss(null);
              }
        }));
  }

  goBack(){
    this.cardClicked(undefined);
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'recommendations', callback: (res: string) => this.recommendationsTxt = res});
    this.localTranslateService.pairs.push({key: 'other-requests', callback: (res: string) => this.otherRequestsTxt = res});
    this.localTranslateService.pairs.push({key: 'no', callback: (res: string) => this.noTxt = res});
  }
}
