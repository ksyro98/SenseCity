export class RequestSummary{
    status: string;
    alias: string;
    subServiceName: string;
    cityName: string;
    cityAddress: string;
    id: number;

    constructor(status: string, alias: string, subServiceName: string, cityName: string, cityAddress: string, id: number) {
        this.status = status;
        this.alias = alias;
        this.subServiceName = subServiceName;
        this.cityName = cityName;
        this.cityAddress = cityAddress;
        this.id = id;
    }
}
