import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import * as L from 'leaflet';
import { CitiesModalComponent } from '../../view-utils/cities-modal/cities-modal.component';
let TechnicalFormMapComponent = class TechnicalFormMapComponent {
    constructor(modalController, toastController) {
        this.modalController = modalController;
        this.toastController = toastController;
    }
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
        this.locationMarker = new L.Marker([38.246242, 21.7350847], { icon: markerIcon, draggable: true });
        this.map = L.map('map_id', { center: [38.246242, 21.7350847], zoom: 15 });
        tiles.addTo(this.map);
        this.locationMarker.addTo(this.map);
        this.map.addEventListener('click', (event) => this.locationMarker.setLatLng(event.latlng));
    }
    presentCitiesModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: CitiesModalComponent,
                cssClass: 'cities-modal-class',
            });
            modal.onDidDismiss()
                .then((data) => {
                this.toastController.create({
                    message: data.data.name,
                    duration: 1000
                }).then((toast) => toast.present());
                this.locationMarker.setLatLng(L.latLng(data.data.lat, data.data.long));
                this.map.setView([data.data.lat, data.data.long], data.data.zoom);
            });
            return yield modal.present();
        });
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