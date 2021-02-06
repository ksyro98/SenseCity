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

  addImage() {
    this.cameraService.showCameraActionSheet(res => this.path = res);
  }
}
