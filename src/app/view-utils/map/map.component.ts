import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Plugins } from '@capacitor/core';
import * as L from 'leaflet';
import {City} from '../../entities/City';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {

  private map;
  private locationMarker;
  @Input() useCurrentLocation: boolean;
  @Input() city: City;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initMap();
    this.updateLocationBasedOnCurrent();
    setTimeout(() => this.map.invalidateSize(), 1);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.map === undefined){
      return;
    }
    console.log(changes);
    console.log(this.city);
    if (changes.hasOwnProperty('city')) {
      this.setMapLocation(this.city.lat, this.city.long, this.city.zoom);
    }
  }

  initMap(){
    const mapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = new L.TileLayer(mapUrl, {});

    const markerIcon = L.icon({
      iconUrl: '/assets/svg-images/marker_user.svg',

      iconSize: [19, 47], // size of the icon
      iconAnchor: [11, 47], // point of the icon which will correspond to marker's location
      popupAnchor: [-1, -38] // point from which the popup should open relative to the iconAnchor
    });
    this.locationMarker = new L.Marker([38.246242, 21.7350847],
        {icon: markerIcon, draggable: true});

    this.map = L.map('map_id', {center: [38.246242, 21.7350847], zoom: 16});
    tiles.addTo(this.map);
    this.locationMarker.addTo(this.map);

    this.map.addEventListener('click', (event) => this.locationMarker.setLatLng(event.latlng));
  }

  async updateLocationBasedOnCurrent(){
    if (!this.useCurrentLocation){
      return;
    }
    const coordinates = await Geolocation.getCurrentPosition();
    const lat = coordinates.coords.latitude;
    const long = coordinates.coords.longitude;
    this.setMapLocation(lat, long, 16);
  }

  private setMapLocation(lat: number, long: number, zoom: number){
    this.locationMarker.setLatLng(L.latLng(lat, long));
    this.map.setView([lat, long], zoom);
  }
}
