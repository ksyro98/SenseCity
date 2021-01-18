import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) {
  }

  public async showAlert(callback: () => void) {
    const alert = await this.alertController.create({
      cssClass: 'alert-dialog-class',
      header: 'Ολοκλήρωση Αίτησης',
      message: 'Είσαι σίγουρος ότι θέλεις να στείλεις αυτή την αίτηση;',
      buttons: [{
        text: 'Οχι',
        role: 'cancel',
      }, {
        text: 'Ναι',
        handler: () => {
          callback();
        }
      }]
    });

    await alert.present();
  }
}
