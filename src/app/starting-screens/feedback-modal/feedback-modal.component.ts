import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Toast } = Plugins;

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss'],
})
export class FeedbackModalComponent implements OnInit {

  static async present(modalController: ModalController, onDismiss: () => void) {
    const modal = await modalController.create({
      component: FeedbackModalComponent,
      cssClass: 'feedback-modal-class',
    });

    modal.onDidDismiss()
        .then((data) => {

        });

    return await modal.present();
  }

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async sendFeedback(value: number){
    await Toast.show({text: 'Η διαθεση σας καταχωρηθηκε. Ευχαριστουμε!'});
    await this.modalController.dismiss();
  }
}
