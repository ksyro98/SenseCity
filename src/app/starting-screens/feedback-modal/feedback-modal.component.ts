import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import {StorageFeedbackCounterService} from '../../storage-utils/storage-feedback-counter-service/storage-feedback-counter.service';
import {NetworkUtilsService} from '../../network-utils/network-utils.service';
import {Mood} from '../../entities/Mood';
import {RequestLocation} from '../../entities/RequestLocation';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

const { Toast } = Plugins;

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss'],
})
export class FeedbackModalComponent implements OnInit {

  @Input() location: RequestLocation;
  moodTitleTxt = 'Πόσο ευχαριστημένος είσαι από την περιοχή σου;';
  private moodStoredTxt = 'Η διάθεση σας καταχωρήθηκε. Ευχαριστούμε!';

  static async present(modalController: ModalController, currentLocation: RequestLocation) {
    const modal = await modalController.create({
      component: FeedbackModalComponent,
      cssClass: 'feedback-modal-class',
      componentProps: {
        location: currentLocation,
      }
    });

    return await modal.present();
  }

  constructor(
      private modalController: ModalController,
      private storageFeedbackCounter: StorageFeedbackCounterService,
      private networkUtils: NetworkUtilsService,
      private localTranslateService: LocalTranslateService
  ) { }

  ngOnInit() {
    this.setTranslationPairs();
    this.localTranslateService.translateLanguage();
  }

  async sendFeedback(value: number){
    this.networkUtils.setFeeling(new Mood(value), this.location).subscribe((_) => {
      Toast.show({text: this.moodStoredTxt});
    });
    await Promise.all([this.modalController.dismiss(), this.storageFeedbackCounter.updateCounter()]);
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'express-mood', callback: (res: string) => this.moodTitleTxt = res});
    this.localTranslateService.pairs.push({key: 'mood-stored', callback: (res: string) => this.moodStoredTxt = res});
  }
}
