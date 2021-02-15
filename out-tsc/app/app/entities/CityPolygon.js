import * as L from 'leaflet';
import { LatLng } from 'leaflet';
export class CityPolygon {
    constructor(points) {
        this.point1 = points.point1;
        this.point2 = points.point2;
        this.point3 = points.point3;
        this.point4 = points.point4;
    }
    toMapPolygon() {
        return [
            new LatLng(this.point1.x, this.point1.y),
            new LatLng(this.point2.x, this.point2.y),
            new LatLng(this.point3.x, this.point3.y),
            new LatLng(this.point4.x, this.point4.y),
        ];
    }
    containsPoint(point) {
        return L.polygon(this.toMapPolygon()).getBounds().contains(point);
    }
}
//# sourceMappingURL=CityPolygon.js.map