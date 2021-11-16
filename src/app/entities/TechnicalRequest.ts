import {SubService} from './SubService';
import {Service} from './Service';
import {RequestLocation} from './RequestLocation';

export class TechnicalRequest{
    public static readonly CONFIRMED = 'CONFIRMED';
    public static readonly IN_PROGRESS = 'IN_PROGRESS';
    public static readonly RESOLVED = 'RESOLVED';

    service: Service;
    subService: SubService;
    comments: string;
    imageDataUrl: string;
    location: RequestLocation;
    named: boolean;

    id: number;
    status: string;
    cityAddress: string;
    department: string;
    municipality: string;
    createdAt: string;

    constructor(service, subService, comments, image, location, named, id?, status?, cityAddress?, department?, municipality?, createdAt?) {
        this.service = service;
        this.subService = subService;
        this.comments = comments;
        this.imageDataUrl = image;
        this.location = location;
        this.named = named;

        this.id = id;
        this.status = status;
        this.cityAddress = cityAddress;
        this.department = department;
        this.municipality = municipality;
        this.createdAt = createdAt;
    }

    getIssue(): string{
        return this.subService.translationKey;   // maybe change that to some key
    }

    getValueDescriptor(): string{
        return this.service.name;
    }
}
