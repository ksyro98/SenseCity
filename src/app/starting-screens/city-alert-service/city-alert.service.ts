import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CityAlertService {

  constructor(public alertController: AlertController) { }

  public async showAlert(content: {head: string, body: string}, callback: () => void) {
    const alert = await this.alertController.create({
      cssClass: 'city-alert-class',
      header: content.head,
      message: content.body,
      buttons: [{
        text: 'Ok',
        handler: () => {
          callback();
        }
      }]
    });

    await alert.present();
  }}
