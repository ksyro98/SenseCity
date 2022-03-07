import { Component, OnInit } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {StorageFeedbackCounterService} from '../../storage-utils/storage-feedback-counter-service/storage-feedback-counter.service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {RequestLocation} from '../../entities/RequestLocation';
import {NetworkUtilsService} from '../../network-utils/network-utils.service';
import {Mood} from '../../entities/Mood';

const {Toast, Geolocation} = Plugins;

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedbackCardComponent implements OnInit {

  feedbackReceived = false;
  buttonsEnabled = true;

  expressMoodTitle: string;
  private moodStoredTxt = 'Η διάθεση σας καταχωρήθηκε. Ευχαριστούμε!';
  private locationRequiredTxt = 'Τα δεδομένα τοποθεσίας είναι απαραίτητα για αυτή τη λειτουργία.';

  constructor(
      private storageFeedbackCounter: StorageFeedbackCounterService,
      private localTranslateService: LocalTranslateService,
      private networkUtils: NetworkUtilsService
  ) {
      this.setTranslationPairs();
  }

  ngOnInit() {
      this.localTranslateService.translateLanguage();
  }

  async sendFeedback(value: number){
    if (!this.buttonsEnabled){
      return;
    }

    this.buttonsEnabled = false;
    Geolocation.getCurrentPosition()
        .then(res => {
            const location: RequestLocation = {
                type: 'Point', coordinates: [res.coords.longitude, res.coords.latitude]
            };
            const mood = new Mood(value);

            this.networkUtils.setFeeling(mood, location).subscribe((x) => {
                Toast.show({text: this.moodStoredTxt});
                this.feedbackReceived = true;
                this.buttonsEnabled = true;
                this.storageFeedbackCounter.updateCounter();
            });
        })
        .catch(reason => {
          Toast.show({
            text: this.locationRequiredTxt,
            duration: 'long'
          });
          console.log(reason);
          this.buttonsEnabled = true;
        });
  }

  private setTranslationPairs(){
      this.localTranslateService.pairs.push({key: 'express-mood', callback: (res: string) => this.expressMoodTitle = res});
      this.localTranslateService.pairs.push({key: 'mood-stored', callback: (res: string) => this.moodStoredTxt = res});
      this.localTranslateService.pairs.push({key: 'location-required', callback: (res: string) => this.locationRequiredTxt = res});
  }
}

