import {Component, Inject, OnInit} from '@angular/core';

import {GET_SERVICES_INTERFACE_DI_TOKEN, GetServicesInterface} from '../../interface-adapters/GetServicesInterface';
import {RequestedService} from '../../entities/RequestedService';

@Component({
  selector: 'app-technical-services-list',
  templateUrl: './technical-services-list.component.html',
  styleUrls: ['./technical-services-list.component.scss'],
})
export class TechnicalServicesListComponent implements OnInit {

  public technicalServices: RequestedService[];
  // private getServicesInterface: GetServicesInterface;

  // TODO how can we remove the call to the ServicesCommunication
  constructor(@Inject(GET_SERVICES_INTERFACE_DI_TOKEN) private getServicesInterface: GetServicesInterface) {
    // this.getServicesInterface = new ServicesCommunication();
  }

  ngOnInit() {
    this.updateServices();
  }

  private async updateServices() {
    this.technicalServices = await this.getServicesInterface.getServices(0);
  }

}
