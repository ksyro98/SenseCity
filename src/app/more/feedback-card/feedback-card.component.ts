import { Component, OnInit } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {StorageFeedbackCounterService} from '../../storage-utils/storage-feedback-counter-service/storage-feedback-counter.service';

const {Toast, Geolocation} = Plugins;

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedbackCardComponent implements OnInit {

  feedbackReceived = false;
  buttonsEnabled = true;

  constructor(private storageFeedbackCounter: StorageFeedbackCounterService) { }

  ngOnInit() {}

  async sendFeedback(value: number){
    console.log(this.buttonsEnabled);
    if (!this.buttonsEnabled){
      return;
    }

    this.buttonsEnabled = false;
    Geolocation.getCurrentPosition()
        .then(res => {
          const lat = res.coords.latitude;
          const long = res.coords.longitude;
          Toast.show({text: 'Η διαθεση σας καταχωρηθηκε. Ευχαριστουμε!'});
          this.feedbackReceived = true;
          this.buttonsEnabled = true;
          this.storageFeedbackCounter.updateCounter();
        })
        .catch(reason => {
          Toast.show({
            text: 'Δυστυχως υπηρξε ενα προβλμα ενω καταχωρουσαμε τη διαθεση σας.' +
                ' Παρακαλουμε σιγουρευτειτε οτι η τοποθεσια στο κινητο σας ειναι ενεργοποιημενη και δοκιμαστε ξανα.',
            duration: 'long'
          });
          console.log(reason);
          this.buttonsEnabled = true;
        });
  }
}
