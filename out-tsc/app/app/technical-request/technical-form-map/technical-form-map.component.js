import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as L from 'leaflet';
let TechnicalFormMapComponent = class TechnicalFormMapComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        this.initMap();
    }
    initMap() {
        const mapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles = new L.TileLayer(mapUrl, {});
        const markerIcon = L.icon({
            // iconUrl: '../../assets/svg-images/' + this.markerIcon,
            iconUrl: '../../assets/svg-images/empty_marker.svg',
            iconSize: [19, 47],
            iconAnchor: [11, 47],
            popupAnchor: [-1, -38] // point from which the popup should open relative to the iconAnchor
        });
        const locationMarker = new L.Marker([38.246242, 21.7350847], { icon: markerIcon, draggable: true });
        this.map = L.map('map_id', { center: [38.246242, 21.7350847], zoom: 15 });
        tiles.addTo(this.map);
        locationMarker.addTo(this.map);
        this.map.addEventListener('click', (event) => locationMarker.setLatLng(event.latlng));
    }
};
TechnicalFormMapComponent = __decorate([
    Component({
        selector: 'app-technical-form-map',
        templateUrl: './technical-form-map.component.html',
        styleUrls: ['./technical-form-map.component.scss'],
    })
], TechnicalFormMapComponent);
export { TechnicalFormMapComponent };
//# sourceMappingURL=technical-form-map.component.js.map