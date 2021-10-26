export class Recommendation {
    constructor(jsonObj) {
        this.subServiceName = jsonObj.url;
        this.address = jsonObj.cf_city_address;
        this.status = jsonObj.status;
        this.id = jsonObj.id;
    }
}
Recommendation.CONFIRMED = 'CONFIRMED';
Recommendation.IN_PROGRESS = 'IN_PROGRESS';
Recommendation.RESOLVED = 'RESOLVED';
//# sourceMappingURL=Recommendation.js.map