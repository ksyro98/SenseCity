import * as L from 'leaflet';
import { LatLng } from 'leaflet';
export class CityPolygon {
    constructor(points) {
        this.pointLB = points.pointLB;
        this.pointLT = points.pointLT;
        this.pointRT = points.pointRT;
        this.pointRB = points.pointRB;
    }
    toMapPolygon() {
        return [
            new LatLng(this.pointLB.x, this.pointLB.y),
            new LatLng(this.pointLT.x, this.pointLT.y),
            new LatLng(this.pointRT.x, this.pointRT.y),
            new LatLng(this.pointRB.x, this.pointRB.y),
        ];
    }
    containsPoint(point) {
        return L.polygon(this.toMapPolygon()).getBounds().contains(point);
    }
}
//# sourceMappingURL=CityPolygon.js.map