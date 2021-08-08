import {Component, Inject, OnInit} from '@angular/core';

import {GET_SERVICES_INTERFACE_DI_TOKEN, GetServicesInterface} from '../../interface-adapters/GetServicesInterface';
import {RequestedService} from '../../entities/RequestedService';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-technical-services-list',
  templateUrl: './technical-services-list.component.html',
  styleUrls: ['./technical-services-list.component.scss'],
})
export class TechnicalServicesListComponent implements OnInit {

  public technicalServices: RequestedService[];
  // private getServicesInterface: GetServicesInterface;

  // TODO how can we remove the call to the ServicesCommunication
  constructor(
      @Inject(GET_SERVICES_INTERFACE_DI_TOKEN) private getServicesInterface: GetServicesInterface,
      private localTranslateService: LocalTranslateService
  ) { }

  async ngOnInit() {
    await this.updateServices();
    this.setTranslationPairs();
    this.localTranslateService.translateLanguage();
  }

  private async updateServices() {
    return this.technicalServices = await this.getServicesInterface.getServices(0);
  }

  setTranslationPairs(){
    this.technicalServices.forEach((service) => {
      this.localTranslateService.pairs.push({key: service.translationKey, callback: (res: string) => service.name = res});
    });
  }
}
