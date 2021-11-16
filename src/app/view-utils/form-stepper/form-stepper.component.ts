import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common';
import {AlertService} from '../alert-service/alert.service';
import {Plugins} from '@capacitor/core';
import {LocalTranslateService} from '../local-translate-service/local-translate.service';
import {PermissionFlag} from '../../entities/utils/PermissionFlag';

const { Keyboard, Toast } = Plugins;

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.scss'],
})
export class FormStepperComponent implements OnInit {

  constructor(
      private location: Location,
      private alertService: AlertService,
      private cdr: ChangeDetectorRef,
      private localTranslateService: LocalTranslateService
  ) {
    this.currentStep = 0;
    this.setTranslationPairs();
  }

  static readonly CLOSE = -1;
  static readonly PREVIOUS = 0;
  static readonly NEXT = 1;
  static readonly SUBMIT = 2;

  @Input() steps: number;
  @Input() canProceed: PermissionFlag;
  @Input() canSubmit: PermissionFlag;
  @Input() currentStep: number;
  @Input() loading: boolean;
  @Output() currentStepEvent = new EventEmitter<number>();
  @Output() submitEvent = new EventEmitter<void>();
  rangeArray: number[];
  keyboardShown = false;

  completeRequestHead = 'Ολοκλήρωση Αίτησης';
  completeRequestBody = 'Είσαι σίγουρος ότι θέλεις να στείλεις αυτή την αίτηση;';

  private static showToastIfNotEmpty(message: string){
    if (message.length > 0) {
      Toast.show({text: message});
    }
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
      FormStepperComponent.showToastIfNotEmpty(this.canProceed.reason);
      return;
    }
    this.currentStepEvent.emit(this.currentStep + 1);
  }

  public submit(){
    if (!this.canButtonBeClicked(FormStepperComponent.SUBMIT)){
      FormStepperComponent.showToastIfNotEmpty(this.canSubmit.reason);
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
  }

  private canButtonBeClicked(which: number): boolean{
    if (this.loading){
      return false;
    }

    switch (which) {
      case FormStepperComponent.CLOSE:
        return true;
      case FormStepperComponent.PREVIOUS:
        return this.currentStep !== 0;
      case FormStepperComponent.NEXT:
        return this.canProceed.permitted;
      case FormStepperComponent.SUBMIT:
        return this.canSubmit.permitted;
      default:
        return false;
    }
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'complete-request-head', callback: (res: string) => this.completeRequestHead = res});
    this.localTranslateService.pairs.push({key: 'complete-request-body', callback: (res: string) => this.completeRequestBody = res});
  }
}
