import { GetServicesInterface } from '../interface-adapters/GetServicesInterface';
import {ADMINISTRATIVE_SERVICES_LIST, Service, TECHNICAL_SERVICES_LIST} from '../entities/Service';

export class ServicesCommunication implements GetServicesInterface{

    public constructor() { }

    async getServices(typeOfService: number): Promise<Service[]>{
        switch (typeOfService) {
            case 0:
                return TECHNICAL_SERVICES_LIST;
            case 1:
                return ADMINISTRATIVE_SERVICES_LIST;
        }
        return [];
    }

}
