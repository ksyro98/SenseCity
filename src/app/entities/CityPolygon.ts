import * as L from 'leaflet';
import {LatLng} from 'leaflet';

export class CityPolygon {
    pointLB: Point;
    pointLT: Point;
    pointRT: Point;
    pointRB: Point;

    constructor(
        points: {
            pointLB: Point,
            pointLT: Point,
            pointRT: Point,
            pointRB: Point
        }) {
        this.pointLB = points.pointLB;
        this.pointLT = points.pointLT;
        this.pointRT = points.pointRT;
        this.pointRB = points.pointRB;
    }

    private toMapPolygon(){
        return [
            new LatLng(this.pointLB.x, this.pointLB.y),
            new LatLng(this.pointLT.x, this.pointLT.y),
            new LatLng(this.pointRT.x, this.pointRT.y),
            new LatLng(this.pointRB.x, this.pointRB.y),
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
