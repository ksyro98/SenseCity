import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-request-details-map-modal',
  templateUrl: './request-details-map-modal.component.html',
  styleUrls: ['./request-details-map-modal.component.scss'],
})
export class RequestDetailsMapModalComponent implements OnInit, AfterViewInit {

  @Input() lat: number;
  @Input() long: number;
  @Input() locationName: string;
  private map;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initMap();
    setTimeout(() => this.map.invalidateSize(), 1);
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
    const locationMarker = new L.Marker([this.lat, this.long],
        {icon: markerIcon, draggable: false});

    this.map = L.map('details_map_id', {center: [this.lat, this.long], zoom: 16});
    tiles.addTo(this.map);
    locationMarker.addTo(this.map);
  }

  dismiss(){
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
