import * as L from 'leaflet';
import {City} from '../entities/City';
import {CityPolygon} from '../entities/CityPolygon';

export const CITY_POLYGONS: Map<string, CityPolygon> = new Map([
    ['Αιγιαλεια', new CityPolygon(
        {
            point1: {x: 38.163157, y: 22.431680},
            point2: {x: 37.880797, y: 22.301217},
            point3: {x: 38.190146, y: 21.820565},
            point4: {x: 38.394935, y: 21.885110},
        })],

    ['Δελφοι', new CityPolygon(
        {
            point1: {x: 38.479569, y: 22.499834},
            point2: {x: 38.475538, y: 22.495972},
            point3: {x: 38.482693, y: 22.484299},
            point4: {x: 38.485314, y: 22.486959},
        })],

    ['Διδυμοτειχο', new CityPolygon(
        {
            point1: {x: 41.359441, y: 26.509572},
            point2: {x: 41.345782, y: 26.516524},
            point3: {x: 41.337920, y: 26.491204},
            point4: {x: 41.354287, y: 26.478501},
        })],

    ['Δυτικη Αχαια', new CityPolygon(
        {
            point1: {x: 37.871970, y: 21.560790},
            point2: {x: 38.060354, y: 21.227080},
            point3: {x: 38.268743, y: 21.372649},
            point4: {x: 38.077653, y: 21.786009},
        })],

    ['Πατρα', new CityPolygon(
        {
            point1: {x: 38.168602, y: 21.633680},
            point2: {x: 38.333875, y: 21.788862},
            point3: {x: 38.313674, y: 21.849287},
            point4: {x: 38.119190, y: 21.743543},
        })],

    ['Πυργος', new CityPolygon(
        {
            point1: {x: 37.660785, y: 21.421439},
            point2: {x: 37.684291, y: 21.421868},
            point3: {x: 37.683611, y: 21.468818},
            point4: {x: 37.659901, y: 21.467444},
        })],
]);


export const CITIES: City[] = [
    {
        name: 'Αιγιαλεία',
        lat: 38.244094,
        long: 22.086997,
        zoom: 11,
        url: 'https://aigialeia.sense.city/',
        polygon: CITY_POLYGONS.get('Αιγιαλεια'),
        cityKey: 'city-aigialeia'
    },
    {
        name: 'Δελφοί',
        lat: 38.480153,
        long: 22.492972,
        zoom: 15,
        url: 'https://delfon.sense.city/',
        polygon: CITY_POLYGONS.get('Δελφοι'),
        cityKey: 'city-delfoi'
    },
    {
        name: 'Διδυμότειχο',
        lat: 41.351323,
        long: 26.496440,
        zoom: 14,
        url: 'https://didymoteicho.sense.city/',
        polygon: CITY_POLYGONS.get('Διδυμοτειχο'),
        cityKey: 'city-didimoticho'
    },
    {
        name: 'Δυτική Αχαϊά',
        lat: 38.168806,
        long: 21.437507,
        zoom: 13,
        url: 'https://ddachaias.sense.city/',
        polygon: CITY_POLYGONS.get('Δυτικη Αχαια'),
        cityKey: 'city-western-achaia'
    },
    {
        name: 'Πάτρα',
        lat: 38.246242,
        long: 21.7350847,
        zoom: 14,
        url: 'https://patras.sense.city/',
        polygon: CITY_POLYGONS.get('Πατρα'),
        cityKey: 'city-patras'
    },
    {
        name: 'Πύργος',
        lat: 37.672908,
        long: 21.436974,
        zoom: 14,
        url: 'https://pyrgos.sense.city/',
        polygon: CITY_POLYGONS.get('Πυργος'),
        cityKey: 'city-pirgos'
    }
];

export function getCityFromPoint(lat: number, long: number): City | undefined{
    const point = new L.LatLng(lat, long);

    CITIES.forEach( city => {
        if (city.polygon.containsPoint(point)){
            return city;
        }
    });

    return CITIES[4];
    // return undefined;
}
