import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {CameraService} from '../../view-utils/camera-service/camera.service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';


@Component({
  selector: 'app-technical-form-image',
  templateUrl: './technical-form-image.component.html',
  styleUrls: ['./technical-form-image.component.scss'],
})
export class TechnicalFormImageComponent implements OnInit {

  @Input() imageDataUrl: string;
  @Output() imageDataUrlChange = new EventEmitter<string>();
  @Input() defaultImage: string;
  @Input() showHeader: boolean;
  @Input() imageHeight: number;

  photograph = 'Φωτογραφία';

  constructor(
      public actionSheetController: ActionSheetController,
      public cameraService: CameraService,
      private localTranslateService: LocalTranslateService
  ) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  addImage() {
    this.cameraService.showCameraActionSheet(res => {
      this.imageDataUrl = res;
      this.imageDataUrlChange.emit(this.imageDataUrl);
    });
  }

  imageExists(): boolean{
    return this.imageDataUrl === undefined || this.imageDataUrl === null || this.imageDataUrl === '';
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'photograph', callback: (res: string) => this.photograph = res});
  }
}
