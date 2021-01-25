import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AdministrativeRequest} from '../../entities/AdministrativeRequest';
import {RequestedService} from '../../entities/RequestedService';
import {GET_SERVICES_INTERFACE_DI_TOKEN, GetServicesInterface} from '../../interface-adapters/GetServicesInterface';

@Component({
  selector: 'app-administrative-services-list',
  templateUrl: './administrative-services-list.component.html',
  styleUrls: ['./administrative-services-list.component.scss'],
})
export class AdministrativeServicesListComponent implements OnInit {

  @Input() query;
  administrativeServices: RequestedService[];

  constructor(@Inject(GET_SERVICES_INTERFACE_DI_TOKEN) private getServicesInterface: GetServicesInterface) { }

  async ngOnInit() {
    this.administrativeServices = await this.getServicesInterface.getServices(1);
  }

}
