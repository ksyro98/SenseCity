import { __awaiter, __decorate } from "tslib";
import { Component, HostListener, Input } from '@angular/core';
import * as L from 'leaflet';
let RequestDetailsMapModalComponent = class RequestDetailsMapModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.initMap();
        setTimeout(() => this.map.invalidateSize(), 1);
    }
    initMap() {
        const mapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles = new L.TileLayer(mapUrl, {});
        const markerIcon = L.icon({
            iconUrl: '../../assets/svg-images/empty_marker.svg',
            iconSize: [19, 47],
            iconAnchor: [11, 47],
            popupAnchor: [-1, -38] // point from which the popup should open relative to the iconAnchor
        });
        const locationMarker = new L.Marker([this.lat, this.long], { icon: markerIcon, draggable: false });
        this.map = L.map('details_map_id', { center: [this.lat, this.long], zoom: 16 });
        tiles.addTo(this.map);
        locationMarker.addTo(this.map);
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
    overrideHardwareBackAction($event) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dismiss();
        });
    }
};
__decorate([
    Input()
], RequestDetailsMapModalComponent.prototype, "lat", void 0);
__decorate([
    Input()
], RequestDetailsMapModalComponent.prototype, "long", void 0);
__decorate([
    Input()
], RequestDetailsMapModalComponent.prototype, "locationName", void 0);
__decorate([
    HostListener('document:ionBackButton', ['$event'])
], RequestDetailsMapModalComponent.prototype, "overrideHardwareBackAction", null);
RequestDetailsMapModalComponent = __decorate([
    Component({
        selector: 'app-request-details-map-modal',
        templateUrl: './request-details-map-modal.component.html',
        styleUrls: ['./request-details-map-modal.component.scss'],
    })
], RequestDetailsMapModalComponent);
export { RequestDetailsMapModalComponent };
//# sourceMappingURL=request-details-map-modal.component.js.map