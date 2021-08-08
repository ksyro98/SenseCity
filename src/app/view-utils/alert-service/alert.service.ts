import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {LocalTranslateService} from '../local-translate-service/local-translate.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  yes = 'Ναι';
  no = 'Όχι';

  constructor(public alertController: AlertController, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
    this.localTranslateService.translateLanguage();
  }

  public async showAlert(content: {head: string, body: string}, callback: () => void, negativeAction = false) {
    const alert = await this.alertController.create({
      cssClass: 'alert-dialog-class',
      header: content.head,
      message: content.body,
      buttons: [{
        text: this.no,
        role: 'cancel',
        cssClass: negativeAction ? 'grey-alert-button' : ''
      }, {
        text: this.yes,
        cssClass: negativeAction ? 'red-alert-button' : '',
        handler: () => {
          callback();
        }
      }]
    });

    await alert.present();
  }

  setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'yes', callback: (res: string) => this.yes = res});
    this.localTranslateService.pairs.push({key: 'no', callback: (res: string) => this.no = res});
  }
}
