import {Component, OnInit} from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import {CameraService} from '../../view-utils/camera-service/camera.service';
import {ActionSheetController} from '@ionic/angular';


@Component({
  selector: 'app-administrative-form-specific-info',
  templateUrl: './administrative-form-specific-info.component.html',
  styleUrls: ['./administrative-form-specific-info.component.scss'],
})
export class AdministrativeFormSpecificInfoComponent implements OnInit {

  paths: string[] = [];

  constructor(
      private fileChooser: FileChooser,
      public cameraService: CameraService) { }

  ngOnInit() {}

  // NOT WORKING
  async addFile(){
    this.fileChooser.open();
  }

  async addImages(){
    this.cameraService.showCameraActionSheet(res => this.paths.push(res));
  }


}
