export class TechnicalRequest {
    constructor(service, subService, comments, image, location, named, id, status, cityAddress, department, municipality, createdAt) {
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
    getIssue() {
        return this.subService.translationKey; // maybe change that to some key
    }
    getValueDescriptor() {
        return this.service.name;
    }
}
TechnicalRequest.CONFIRMED = 'CONFIRMED';
TechnicalRequest.IN_PROGRESS = 'IN_PROGRESS';
TechnicalRequest.RESOLVED = 'RESOLVED';
//# sourceMappingURL=TechnicalRequest.js.map