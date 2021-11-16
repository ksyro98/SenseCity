import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ProfileElement} from '../../entities/ProfileElement';
import {Plugins} from '@capacitor/core';
import {Subscription} from 'rxjs';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {VerificationLogicService} from '../verification-logic/verification-logic.service';

const { Toast } = Plugins;

@Component({
  selector: 'app-verify-modal',
  templateUrl: './verify-modal.component.html',
  styleUrls: ['./verify-modal.component.scss'],
})
export class VerifyModalComponent implements OnInit {

  @Input() profileElement: ProfileElement;

  private firstDigit: string;
  private secondDigit: string;
  private thirdDigit: string;
  private fourthDigit: string;
  private unexpectedError: string;


  isVerifyEnabled = true;
  isVerifyLoading = false;

  private verificationSubscription: Subscription;

  verificationDescription: string;

  verification = '';
  verificationDesc1 = '';
  verificationDesc2 = '';
  verificationDesc3 = '';
  verify = '';
  emptyDigitsError = '';
  wrongCodeError = '';
  successfulVerification = '';


  constructor(
      private logic: VerificationLogicService,
      public modalController: ModalController,
      private localTranslateService: LocalTranslateService
  ) {
    this.setTranslationPairs();
  }

  static async present(modalController: ModalController, userElement: ProfileElement, onDismiss?: (result: boolean) => void){
    const modal = await modalController.create({
      component: VerifyModalComponent,
      cssClass: 'verify-modal-class',
      componentProps: {
        profileElement: userElement,
      }
    });

    modal.onDidDismiss()
        .then((data) => {
          if (data.data !== null) {
            onDismiss(data.data);
          }
        });

    return await modal.present();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
    this.sendActivationCode();
  }

  onDigitTyped(ev) {

    const value = ev.target.firstChild.value;
    // when backspace is pressed, the value isn't updated (probably if(value)) isn't "entered"
    console.log(value);

    if (value) {
      if (value.length > 1) {
        ev.target.firstChild.value = value.toString().split('')[value.length - 1];
      }
      if (ev.target.parentElement.parentElement.nextElementSibling) {
        // ion-input --> div --> col --> col --> div --> ion-input --> input
        ev.target.parentElement.parentElement.nextElementSibling.firstChild.firstChild.firstChild.focus();
      }
    }

    this.updateDigitValues(ev.target.firstChild.value, ev.target.id);
    if (this.firstDigit && this.secondDigit && this.thirdDigit && this.fourthDigit) {
      this.startVerification();
    }
  }

  private sendActivationCode(){
    this.logic.sendActivationCode(this.profileElement.key).subscribe({
      next: value => console.log(value),
      error: error => {
        console.log(error);
        Toast.show({text: this.unexpectedError});
      }
    });
  }

  startVerification(){
    if (this.firstDigit && this.secondDigit && this.thirdDigit && this.fourthDigit){
      const code = this.firstDigit + this.secondDigit + this.thirdDigit + this.fourthDigit;
      this.activate(code);
    }
    else {
      Toast.show({text: this.emptyDigitsError});
      this.stopActivation();
    }
  }

  private activate(code: string){
    this.startLoading();
    this.verificationSubscription = this.logic.activateUser(this.profileElement.key, code)
        .subscribe({
          next: value => {
            console.log(value);
            if (value === null){
              console.log('error');
              Toast.show({text: this.wrongCodeError, duration: 'long'});
            }
            else if (value.ok === 1){
              console.log('success');
              Toast.show({text: this.successfulVerification});
              this.modalController.dismiss(true);
            }
            this.stopLoading();
          },
          error: error => {
            console.log(error);
          }
        });
  }

  private stopActivation(){
    this.verificationSubscription.unsubscribe();
    this.stopLoading();
  }

  private enableButton(enable: boolean){
    this.isVerifyEnabled = enable;
  }

  private startLoading(){
    this.isVerifyLoading = true;
    this.enableButton(false);
  }

  private stopLoading(){
    this.isVerifyLoading = false;
    this.enableButton(true);
  }

  private updateDigitValues(value: string, which: string){
    switch (which) {
      case 'firstDigitInput':
        this.firstDigit = value;
        break;
      case 'secondDigitInput':
        this.secondDigit = value;
        break;
      case 'thirdDigitInput':
        this.thirdDigit = value;
        break;
      case 'fourthDigitInput':
        this.fourthDigit = value;
        break;
    }
  }

  @HostListener('document:ionBackButton', ['$event'])
  private async overrideHardwareBackAction($event: any) {
    await this.modalController.dismiss(false);
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'verification', callback: (res: string) => this.verification = res});
    this.localTranslateService.pairs.push({key: 'verification-description-1', callback: (res: string) => this.verificationDesc1 = res});
    this.localTranslateService.pairs.push({key: 'verification-description-2', callback: (res: string) => this.verificationDesc2 = res});
    this.localTranslateService.pairs.push({key: 'verification-description-3', callback: (res: string) => this.verificationDesc3 = res});
    this.localTranslateService.pairs.push({key: 'verify', callback: (res: string) => this.verify = res});
    this.localTranslateService.pairs.push({key: 'empty-digits-error', callback: (res: string) => this.emptyDigitsError = res});
    this.localTranslateService.pairs.push({key: 'wrong-code-error', callback: (res: string) => this.wrongCodeError = res});
    this.localTranslateService.pairs.push({key: 'successful-verification', callback: (res: string) => this.successfulVerification = res});
    this.localTranslateService.pairs.push({key: 'unexpected-error', callback: (res: string) => this.unexpectedError = res});
  }
}
