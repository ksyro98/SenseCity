import {Component, Input, OnInit} from '@angular/core';
import {ADMINISTRATIVE_SERVICES_LIST, Service} from '../../entities/Service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-administrative-services-list',
  templateUrl: './administrative-services-list.component.html',
  styleUrls: ['./administrative-services-list.component.scss'],
})
export class AdministrativeServicesListComponent implements OnInit {

  @Input() query;
  administrativeServices: Service[];

  constructor(private localTranslateService: LocalTranslateService) { }

  async ngOnInit() {
    this.administrativeServices = ADMINISTRATIVE_SERVICES_LIST;
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
