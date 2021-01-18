import { Injectable } from '@angular/core';

import {RequestedService} from '../entities/RequestedService';

export const GET_SERVICES_INTERFACE_DI_TOKEN = 'GetServicesInterface';

export interface GetServicesInterface {
    getServices: (typeOfService: number) => Promise<RequestedService[]>;
}

