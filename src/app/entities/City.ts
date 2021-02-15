import {CityPolygon} from './CityPolygon';

export interface City {
    name: string;
    lat: number;
    long: number;
    zoom: number;
    url: string;
    polygon: CityPolygon;
}
