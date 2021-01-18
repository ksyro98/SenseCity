import {Category} from './Category';
import {RequestedService} from './RequestedService';

export interface TechnicalRequest{
    service: RequestedService;
    category: Category;
    comments: string;
    image: string; // find out how images will be stored
    location: string; // probably change to location interface
    named: boolean;
}
