import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {CameraService} from '../../view-utils/camera-service/camera.service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {DomUtil} from 'leaflet';
import setTransform = DomUtil.setTransform;

@Component({
  selector: 'app-technical-form-image',
  templateUrl: './technical-form-image.component.html',
  styleUrls: ['./technical-form-image.component.scss'],
})
export class TechnicalFormImageComponent implements OnInit {

  @Input() path: string;
  @Output() pathChange = new EventEmitter<string>();
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
      this.path = res;
      this.pathChange.emit(this.path);
    });
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'photograph', callback: (res: string) => this.photograph = res});
  }
}
