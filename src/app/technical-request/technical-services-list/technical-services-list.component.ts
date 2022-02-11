import {Component, OnInit} from '@angular/core';
import {Service, TECHNICAL_SERVICES_LIST} from '../../entities/Service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-technical-services-list',
  templateUrl: './technical-services-list.component.html',
  styleUrls: ['./technical-services-list.component.scss'],
})
export class TechnicalServicesListComponent implements OnInit {

  public technicalServices: Service[];

  constructor(private localTranslateService: LocalTranslateService) { }

  async ngOnInit() {
    await this.updateServices();
    this.setTranslationPairs();
    this.localTranslateService.translateLanguage();
  }

  private async updateServices() {
    this.technicalServices = TECHNICAL_SERVICES_LIST;
  }

  setTranslationPairs(){
    this.technicalServices.forEach((service) => {
      this.localTranslateService.pairs.push({key: service.translationKey, callback: (res: string) => service.name = res});
    });
  }
}
