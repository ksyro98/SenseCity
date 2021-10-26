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

  static readonly CLOSE = -1;
  static readonly PREVIOUS = 0;
  static readonly NEXT = 1;

  @Input() steps: number;
  @Input() canProceed: boolean;
  @Input() currentStep: number;
  @Input() loading: boolean;
  @Output() currentStepEvent = new EventEmitter<number>();
  @Output() submitEvent = new EventEmitter<void>();
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
    if (!this.canButtonBeClicked(FormStepperComponent.CLOSE)){
      return;
    }
    this.currentStepEvent.emit(0);
    this.location.back();
  }

  public previousStep(){
    if (!this.canButtonBeClicked(FormStepperComponent.PREVIOUS)){
      return;
    }
    this.currentStepEvent.emit(this.currentStep - 1);
  }

  public nextStep(){
    if (!this.canButtonBeClicked(FormStepperComponent.NEXT)){
      return;
    }
    if (this.currentStep === this.steps - 1){
      this.alertService.show(
          {
            head: this.completeRequestHead,
            body: this.completeRequestBody,
          },
          () => this.submitEvent.emit()
      );
      return;
    }
    this.currentStepEvent.emit(this.currentStep + 1);
  }

  private canButtonBeClicked(which: number): boolean{
    switch (which) {
      case FormStepperComponent.CLOSE:
        return !this.loading;
      case FormStepperComponent.PREVIOUS:
        return this.canProceed && (this.currentStep !== 0) && !this.loading;
      case FormStepperComponent.NEXT:
        return this.canProceed && !this.loading;
      default:
        return false;
    }
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'complete-request-head', callback: (res: string) => this.completeRequestHead = res});
    this.localTranslateService.pairs.push({key: 'complete-request-body', callback: (res: string) => this.completeRequestBody = res});
  }
}
