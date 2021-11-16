export class Recommendation {
    constructor(jsonObj) {
        this.subServiceName = jsonObj.url;
        this.address = jsonObj.cf_city_address;
        this.status = jsonObj.status;
        this.id = jsonObj.id;
    }
}
//# sourceMappingURL=Recommendation.js.map