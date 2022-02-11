import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WelcomeAlertService {

  constructor(public alertController: AlertController) { }

  public async showAlert(content: {head: string, body: string}, callback: () => void, cancel?: () => void) {


    const alert = await this.alertController.create({
      cssClass: 'city-alert-class',
      header: content.head,
      message: content.body,
      buttons: this.getDialogButtons(callback, cancel)
    });

    await alert.present();
  }

  private getDialogButtons(callback: () => void, cancel?: () => void): any[]{
    const buttonsList = [];

    if (cancel){
      buttonsList.push({
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'grey-alert-button'
      });
    }

    buttonsList.push({
      text: 'Ok',
      handler: () => callback()
    });

    return buttonsList;
  }

}
