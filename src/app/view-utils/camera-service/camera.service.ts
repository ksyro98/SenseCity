import {Injectable} from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {ActionSheetController} from '@ionic/angular';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CameraService {


  constructor(public actionSheetController: ActionSheetController) { }

  private static async takeNewPhoto(): Promise<string> {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 40,
    });

    return capturedPhoto.dataUrl;
  }

  private static async openGallery(): Promise<string>{
    const galleryPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
      quality: 40
    });

    return galleryPhoto.dataUrl;
  }

  async showCameraActionSheet(callback: (res: string) => void){
    const actionSheet = await this.actionSheetController.create({
      header: 'Εισαγωγή φωτογραφίας',
      cssClass: 'camera-sheet-class',
      buttons: [ {
        text: 'Κάμερα',
        icon: 'camera',
        cssClass: 'camera-sheet-button',
        handler: () => {
          CameraService.takeNewPhoto().then(res => callback(res));
        }
      }, {
        text: 'Συλλογή',
        icon: 'image',
        cssClass: 'camera-sheet-button',
        handler: () => {
          CameraService.openGallery().then(res => callback(res));
        }
      } ]
    });
    await actionSheet.present();
  }
}

