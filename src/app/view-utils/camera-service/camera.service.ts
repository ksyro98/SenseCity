import {Injectable} from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {ActionSheetController} from '@ionic/angular';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(public actionSheetController: ActionSheetController) { }

  public async takeNewPhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    return capturedPhoto.webPath;
  }

  public async openGallery(){
    const galleryPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 100
    });

    return galleryPhoto.webPath;
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
          this.takeNewPhoto()
              .then(res => callback(res));
        }
      }, {
        text: 'Συλλογή',
        icon: 'image',
        cssClass: 'camera-sheet-button',
        handler: () => {
          this.openGallery()
              .then(res => callback(res));
        }
      } ]
    });
    await actionSheet.present();
  }
}

