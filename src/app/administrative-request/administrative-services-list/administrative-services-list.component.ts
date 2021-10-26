import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AdministrativeRequest} from '../../entities/AdministrativeRequest';
import {Service} from '../../entities/Service';
import {GET_SERVICES_INTERFACE_DI_TOKEN, GetServicesInterface} from '../../interface-adapters/GetServicesInterface';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-administrative-services-list',
  templateUrl: './administrative-services-list.component.html',
  styleUrls: ['./administrative-services-list.component.scss'],
})
export class AdministrativeServicesListComponent implements OnInit {

  @Input() query;
  administrativeServices: Service[];

  constructor(
      @Inject(GET_SERVICES_INTERFACE_DI_TOKEN) private getServicesInterface: GetServicesInterface,
      private localTranslateService: LocalTranslateService
  ) { }

  async ngOnInit() {
    this.administrativeServices = await this.getServicesInterface.getServices(1);
    this.setTranslationPairs();
    this.localTranslateService.translateLanguage();
  }

  setTranslationPairs(){
    // TODO when the placeholder values are replaced change the line inside the loop with the commented one
    this.administrativeServices.forEach((service) => {
      this.localTranslateService.pairs.push({key: service.translationKey, callback: (_: string) => null});
      // this.localTranslateService.pairs.push({key: service.translationKey, callback: (res: string) => service.name = res});
    });
  }

}
