import {Component, OnInit} from '@angular/core';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {CameraService} from '../../view-utils/camera-service/camera.service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-administrative-form-specific-info',
  templateUrl: './administrative-form-specific-info.component.html',
  styleUrls: ['./administrative-form-specific-info.component.scss'],
})
export class AdministrativeFormSpecificInfoComponent implements OnInit {

  paths: string[] = [];
  selectedFile = 'Προσθήκη Αρχείου';

  informationLabel = 'Πληροφορία';
  textInformationDesc = 'Περιγραφή πληροφορίας';
  textLabel = 'κείμενο';
  fileLabel = 'αρχείο';
  photoLabel = 'φωτογραφία';
  photoDesc = 'Προσθήκη Φωτογραφιών';
  specificInformation = 'Εξειδικευμένες πληροφορίες';

  constructor(
      private fileChooser: FileChooser,
      // private filePath: FilePath,
      public cameraService: CameraService,
      private localTranslateService: LocalTranslateService
  ) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  // NOT WORKING
  async addFile(){
    const uri = await this.fileChooser.open();
  }

  async addImages(){
    await this.cameraService.showCameraActionSheet(res => this.paths.push(res));
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'selected-file', callback: (res: string) => this.selectedFile = res});
    this.localTranslateService.pairs.push({key: '_information-label', callback: (res: string) => this.informationLabel = res});
    this.localTranslateService.pairs.push({key: '_text-information-desc', callback: (res: string) => this.textInformationDesc = res});
    this.localTranslateService.pairs.push({key: 'text-label', callback: (res: string) => this.textLabel = res});
    this.localTranslateService.pairs.push({key: 'file-label', callback: (res: string) => this.fileLabel = res});
    this.localTranslateService.pairs.push({key: 'photo-label', callback: (res: string) => this.photoLabel = res});
    this.localTranslateService.pairs.push({key: '_photo-desc', callback: (res: string) => this.photoDesc = res});
    this.localTranslateService.pairs.push({key: 'specific-information', callback: (res: string) => this.specificInformation = res});
  }
}
