import { Injectable } from '@angular/core';

import {Service} from '../entities/Service';

export const GET_SERVICES_INTERFACE_DI_TOKEN = 'GetServicesInterface';

export interface GetServicesInterface {
    getServices: (typeOfService: number) => Promise<Service[]>;
}

