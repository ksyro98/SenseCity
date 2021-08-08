import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common';
import {AlertController} from '@ionic/angular';
import {AlertService} from '../alert-service/alert.service';
import { Plugins, KeyboardInfo } from '@capacitor/core';
import {LocalTranslateService} from '../local-translate-service/local-translate.service';

const { Keyboard } = Plugins;

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
  keyboardShown = false;

  completeRequestHead = 'Ολοκλήρωση Αίτησης';
  completeRequestBody = 'Είσαι σίγουρος ότι θέλεις να στείλεις αυτή την αίτηση;';

  constructor(
      private location: Location,
      private alertService: AlertService,
      private cdr: ChangeDetectorRef,
      private localTranslateService: LocalTranslateService
  ) {
    this.currentStep = 0;
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();

    this.rangeArray = Array(this.steps).fill(0).map((x, i) => i);

    Keyboard.addListener(
        'keyboardWillShow',
        (_) => {
          this.keyboardShown = true;
          console.log(this.keyboardShown);
          this.cdr.detectChanges();
        }
    );

    Keyboard.addListener(
        'keyboardWillHide',
        () => {
          this.keyboardShown = false;
          console.log(this.keyboardShown);
          this.cdr.detectChanges();
        }
    );
  }

  public closeForm(){
    this.location.back();
  }

  public nextStep(){
    if (!this.canProceed){
      return;
    }
    if (this.currentStep === this.steps - 1){
      this.alertService.showAlert(
          {
            head: this.completeRequestHead,
            body: this.completeRequestBody,
          },
          () => this.location.back()
      );
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

    setTranslationPairs(){
      this.localTranslateService.pairs.push({key: 'complete-request-head', callback: (res: string) => this.completeRequestHead = res});
      this.localTranslateService.pairs.push({key: 'complete-request-body', callback: (res: string) => this.completeRequestBody = res});
    }
}
