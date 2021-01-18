import {Component, Input, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {CameraService} from '../../view-utils/camera-service/camera.service';

@Component({
  selector: 'app-technical-form-image',
  templateUrl: './technical-form-image.component.html',
  styleUrls: ['./technical-form-image.component.scss'],
})
export class TechnicalFormImageComponent implements OnInit {

  path = '';
  @Input() defaultImage: string;
  @Input() showHeader: boolean;
  @Input() imageHeight: number;

  constructor(public actionSheetController: ActionSheetController, public cameraService: CameraService) { }

  ngOnInit() {}

  async showCameraActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Εισαγωγή φωτογραφίας',
      cssClass: 'camera-sheet-class',
      buttons: [ {
        text: 'Κάμερα',
        icon: 'camera',
        cssClass: 'camera-sheet-button',
        handler: () => {
          this.cameraService.takeNewPhoto()
              .then(res => this.path = res);
        }
      }, {
        text: 'Συλλογή',
        icon: 'image',
        cssClass: 'camera-sheet-button',
        handler: () => {
          this.cameraService.openGallery()
              .then(res => this.path = res);
        }
      }]
    });
    await actionSheet.present();
  }
}
