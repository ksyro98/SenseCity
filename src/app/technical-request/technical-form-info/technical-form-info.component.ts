import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { CameraService } from '../../view-utils/camera-service/camera.service';

@Component({
  selector: 'app-technical-form-info',
  templateUrl: './technical-form-info.component.html',
  styleUrls: ['./technical-form-info.component.scss'],
})
export class TechnicalFormInfoComponent implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() {}

}
