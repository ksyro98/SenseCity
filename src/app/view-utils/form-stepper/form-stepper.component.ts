import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common';
import {AlertController} from '@ionic/angular';
import {AlertService} from '../alert-service/alert.service';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.scss'],
})
export class FormStepperComponent implements OnInit {

  @Input() steps: number;
  @Input() canProceed: boolean;
  currentStep: number;
  @Output() currentStepEvent = new EventEmitter<number>();
  rangeArray: number[];

  constructor(private location: Location, private alertService: AlertService) {
    this.currentStep = 0;
  }

  ngOnInit() {
    this.rangeArray = Array(this.steps).fill(0).map((x, i) => i);
  }

  public closeForm(){
    this.location.back();
  }

  public nextStep(){
    if (!this.canProceed){
      return;
    }
    if (this.currentStep === this.steps - 1){
      this.alertService.showAlert(() => this.location.back());
      return;
    }
    this.currentStep++;
    this.currentStepEvent.emit(this.currentStep);
  }

  public previousStep(){
    if ((!this.canProceed) || (this.currentStep === 0)){
      return;
    }
    this.currentStep--;
    this.currentStepEvent.emit(this.currentStep);
  }

}
