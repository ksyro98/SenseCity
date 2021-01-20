import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {ModalController, ToastController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';

@Component({
  selector: 'app-technical-form-map',
  templateUrl: './technical-form-map.component.html',
  styleUrls: ['./technical-form-map.component.scss'],
})
export class TechnicalFormMapComponent implements OnInit, AfterViewInit {

  private map;
  private locationMarker;

  constructor(public modalController: ModalController, public toastController: ToastController) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(){
    const mapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = new L.TileLayer(mapUrl, {});

    const markerIcon = L.icon({
      // iconUrl: '../../assets/svg-images/' + this.markerIcon,
      iconUrl: '../../assets/svg-images/empty_marker.svg',

      iconSize: [19, 47], // size of the icon
      iconAnchor: [11, 47], // point of the icon which will correspond to marker's location
      popupAnchor: [-1, -38] // point from which the popup should open relative to the iconAnchor
    });
    this.locationMarker = new L.Marker([38.246242, 21.7350847],
        {icon: markerIcon, draggable: true});

    this.map = L.map('map_id', {center: [38.246242, 21.7350847], zoom: 15});
    tiles.addTo(this.map);
    this.locationMarker.addTo(this.map);

    this.map.addEventListener('click', (event) => this.locationMarker.setLatLng(event.latlng));
  }

  async presentCitiesModal(){
    const modal = await this.modalController.create({
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

    return await modal.present();
  }
}
