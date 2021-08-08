import { Component, OnInit } from '@angular/core';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-administrative-form-submit',
  templateUrl: './administrative-form-submit.component.html',
  styleUrls: ['./administrative-form-submit.component.scss'],
})
export class AdministrativeFormSubmitComponent implements OnInit {

  submit = 'Υποβολή';
  beforeNameText = 'Ο ';
  submitAdminRequest1 = 'με ΑΔΤ';
  submitAdminRequest2 = 'κάνει αίτηση στο';
  submitAdminRequest3 = 'Δήμο Πατρών';
  submitAdminRequest4 = 'για την έκδωση πιστοποιητικού';
  submitAdminRequest5 = 'Dolor assumenda';
  submitAdminRequest6 = 'στις';
  submitAdminRequest7 = '17 Δεκεμβρίου 2020';
  submitAdminRequest8 = 'Το πιστοπιητικό θα σταλθεί στο ηλεκτρονικό ταχυδρομίο με διεύθυνση';
  nameOfPhotoValue = 'Ονομα φωτογραφιας';
  nameOfFileValue = 'Ονομα αρχειου';
  acceptTerms1 = 'Αποδέχομαι τους ';
  acceptTerms2 = 'όρους χρήσης';
  acceptTerms3 = ' του SenseCity.';


  constructor(private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'submit', callback: (res: string) => this.submit = res});
    this.localTranslateService.pairs.push({key: 'submit', callback: (res: string) => this.submit = res});
    this.localTranslateService.pairs.push({key: 'before-name-text', callback: (res: string) => this.beforeNameText = res});
    this.localTranslateService.pairs.push({key: 'submit-admin-request-1', callback: (res: string) => this.submitAdminRequest1 = res});
    this.localTranslateService.pairs.push({key: 'submit-admin-request-2', callback: (res: string) => this.submitAdminRequest2 = res});
    this.localTranslateService.pairs.push({key: 'submit-admin-request-3', callback: (res: string) => this.submitAdminRequest3 = res});
    this.localTranslateService.pairs.push({key: 'submit-admin-request-4', callback: (res: string) => this.submitAdminRequest4 = res});
    this.localTranslateService.pairs.push({key: 'submit-admin-request-5', callback: (res: string) => this.submitAdminRequest5 = res});
    this.localTranslateService.pairs.push({key: 'submit-admin-request-6', callback: (res: string) => this.submitAdminRequest6 = res});
    this.localTranslateService.pairs.push({key: 'submit-admin-request-7', callback: (res: string) => this.submitAdminRequest7 = res});
    this.localTranslateService.pairs.push({key: 'submit-admin-request-8', callback: (res: string) => this.submitAdminRequest8 = res});
    this.localTranslateService.pairs.push({key: '_name-of-photo-value', callback: (res: string) => this.nameOfPhotoValue = res});
    this.localTranslateService.pairs.push({key: '_name-of-file-value', callback: (res: string) => this.nameOfFileValue = res});
    this.localTranslateService.pairs.push({key: 'accept-terms-1', callback: (res: string) => this.acceptTerms1 = res});
    this.localTranslateService.pairs.push({key: 'accept-terms-2', callback: (res: string) => this.acceptTerms2 = res});
    this.localTranslateService.pairs.push({key: 'accept-terms-3', callback: (res: string) => this.acceptTerms3 = res});
  }
}
