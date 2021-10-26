import {SubService} from './SubService';
import {Service} from './Service';
import {RequestLocation} from './RequestLocation';

export class TechnicalRequest{
    service: Service;
    subService: SubService;
    comments: string;
    image: string; // find out how images will be stored
    location: RequestLocation;
    named: boolean;

    constructor(service, subService, comments, image, location, named) {
        this.service = service;
        this.subService = subService;
        this.comments = comments;
        this.image = image;
        this.location = location;
        this.named = named;
    }

    getIssue(): string{
        return this.subService.translationKey;   // maybe change that to some key
    }

    getValueDescriptor(): string{
        return this.service.name;
    }
}
