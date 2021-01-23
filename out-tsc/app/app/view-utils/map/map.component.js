import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Plugins } from '@capacitor/core';
import * as L from 'leaflet';
const { Geolocation } = Plugins;
let MapComponent = class MapComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        this.initMap();
        this.updateLocationBasedOnCurrent();
        setTimeout(() => this.map.invalidateSize(), 1);
    }
    ngOnChanges(changes) {
        if (this.map === undefined) {
            return;
        }
        console.log(changes);
        console.log(this.city);
        if (changes.hasOwnProperty('city')) {
            this.setMapLocation(this.city.lat, this.city.long, this.city.zoom);
        }
    }
    initMap() {
        const mapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles = new L.TileLayer(mapUrl, {});
        const markerIcon = L.icon({
            iconUrl: '/assets/svg-images/marker_user.svg',
            iconSize: [19, 47],
            iconAnchor: [11, 47],
            popupAnchor: [-1, -38] // point from which the popup should open relative to the iconAnchor
        });
        this.locationMarker = new L.Marker([38.246242, 21.7350847], { icon: markerIcon, draggable: true });
        this.map = L.map('map_id', { center: [38.246242, 21.7350847], zoom: 16 });
        tiles.addTo(this.map);
        this.locationMarker.addTo(this.map);
        this.map.addEventListener('click', (event) => this.locationMarker.setLatLng(event.latlng));
    }
    updateLocationBasedOnCurrent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.useCurrentLocation) {
                return;
            }
            const coordinates = yield Geolocation.getCurrentPosition();
            const lat = coordinates.coords.latitude;
            const long = coordinates.coords.longitude;
            this.setMapLocation(lat, long, 16);
        });
    }
    setMapLocation(lat, long, zoom) {
        this.locationMarker.setLatLng(L.latLng(lat, long));
        this.map.setView([lat, long], zoom);
    }
};
__decorate([
    Input()
], MapComponent.prototype, "useCurrentLocation", void 0);
__decorate([
    Input()
], MapComponent.prototype, "city", void 0);
MapComponent = __decorate([
    Component({
        selector: 'app-map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.scss'],
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=map.component.js.map