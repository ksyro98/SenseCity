import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }

  public async showAlert(content: {head: string, body: string}, callback: () => void, negativeAction = false) {
    const alert = await this.alertController.create({
      cssClass: 'alert-dialog-class',
      header: content.head,
      message: content.body,
      buttons: [{
        text: 'Οχι',
        role: 'cancel',
        cssClass: negativeAction ? 'grey-alert-button' : ''
      }, {
        text: 'Ναι',
        cssClass: negativeAction ? 'red-alert-button' : '',
        handler: () => {
          callback();
        }
      }]
    });

    await alert.present();
  }
}
