export class Recommendation {
    subServiceName: string;
    address: string;
    status: string;
    id: number;

    constructor(jsonObj) {
        this.subServiceName = jsonObj.url;
        this.address = jsonObj.cf_city_address;
        this.status = jsonObj.status;
        this.id = jsonObj.id;
    }
}

