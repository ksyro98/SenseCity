export class Recommendation {
    public static readonly CONFIRMED = 'CONFIRMED';
    public static readonly IN_PROGRESS = 'IN_PROGRESS';
    public static readonly RESOLVED = 'RESOLVED';

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

