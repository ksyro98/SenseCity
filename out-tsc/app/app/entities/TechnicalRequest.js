export class TechnicalRequest {
    constructor(service, subService, comments, image, location, named) {
        this.service = service;
        this.subService = subService;
        this.comments = comments;
        this.image = image;
        this.location = location;
        this.named = named;
    }
    getIssue() {
        return this.subService.translationKey; // maybe change that to some key
    }
    getValueDescriptor() {
        return this.service.name;
    }
}
//# sourceMappingURL=TechnicalRequest.js.map