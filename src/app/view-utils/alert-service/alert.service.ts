import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {LocalTranslateService} from '../local-translate-service/local-translate.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  yes = 'Ναι';
  no = 'Όχι';
  ok = 'Ok';

  constructor(public alertController: AlertController, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
    this.localTranslateService.translateLanguage();
  }

  public async show(content: {head: string, body: string}, callback: () => void, negativeAction = false, onlyOk = false) {
    const alert = await this.alertController.create({
      cssClass: 'alert-dialog-class',
      header: content.head,
      message: content.body,
      buttons: this.getButtons(onlyOk, negativeAction, callback)
    });

    await alert.present();
  }

  private getButtons(onlyOk: boolean, negativeAction: boolean, callback: () => void) {
    const buttons = [];
    if (!onlyOk){
      buttons.push({
        text: this.no,
        role: 'cancel',
        cssClass: negativeAction ? 'grey-alert-button' : ''
      });
    }

    buttons.push({
      text: onlyOk ? this.ok : this.yes,
      cssClass: negativeAction ? 'red-alert-button' : '',
      handler: () => {
        callback();
      }
    });

    return buttons;
  }

  setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'yes', callback: (res: string) => this.yes = res});
    this.localTranslateService.pairs.push({key: 'no', callback: (res: string) => this.no = res});
  }
}
