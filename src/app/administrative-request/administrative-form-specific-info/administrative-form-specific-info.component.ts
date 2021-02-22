import {Component, OnInit} from '@angular/core';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {CameraService} from '../../view-utils/camera-service/camera.service';

@Component({
  selector: 'app-administrative-form-specific-info',
  templateUrl: './administrative-form-specific-info.component.html',
  styleUrls: ['./administrative-form-specific-info.component.scss'],
})
export class AdministrativeFormSpecificInfoComponent implements OnInit {

  paths: string[] = [];
  selectedFile = 'Προσθηκη Αρχειου';

  constructor(
      private fileChooser: FileChooser,
      // private filePath: FilePath,
      public cameraService: CameraService
  ) { }

  ngOnInit() {}

  // NOT WORKING
  async addFile(){
    const uri = await this.fileChooser.open();
  }

  async addImages(){
    await this.cameraService.showCameraActionSheet(res => this.paths.push(res));
  }


}
