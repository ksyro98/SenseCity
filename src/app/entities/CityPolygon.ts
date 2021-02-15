import * as L from 'leaflet';
import {LatLng, polygon} from 'leaflet';

export class CityPolygon {
    point1: Point;
    point2: Point;
    point3: Point;
    point4: Point;

    constructor(
        points: {
            point1: Point,
            point2: Point,
            point3: Point,
            point4: Point
        }) {
        this.point1 = points.point1;
        this.point2 = points.point2;
        this.point3 = points.point3;
        this.point4 = points.point4;
    }

    private toMapPolygon(){
        return [
            new LatLng(this.point1.x, this.point1.y),
            new LatLng(this.point2.x, this.point2.y),
            new LatLng(this.point3.x, this.point3.y),
            new LatLng(this.point4.x, this.point4.y),
        ];
    }

    containsPoint(point: LatLng): boolean {
        return L.polygon(this.toMapPolygon()).getBounds().contains(point);
    }
}

export interface Point {
    x: number;
    y: number;
}
