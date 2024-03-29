import {AfterViewInit, Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { Plugins } from '@capacitor/core';
import * as L from 'leaflet';
import {City} from '../../entities/City';
import {RequestLocation} from '../../entities/RequestLocation';
import {StorageCityService} from '../../storage-utils/storage-city-service/storage-city.service';
import {LatLngExpression} from 'leaflet';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {

  private map;
  private locationMarker;
  private defaultPoint: LatLngExpression = [38.246242, 21.7350847];
  @Input() useCurrentLocation: boolean;
  @Input() city: City;
  @Input() location: RequestLocation;
  @Input() mapId = 'map_id';
  @Output() locationChange = new EventEmitter<RequestLocation>();

  constructor(private storageCityService: StorageCityService) { }

  async ngOnInit() {
    const storedCity = await this.storageCityService.getCity();
    if (storedCity) {
      this.defaultPoint = [storedCity.lat, storedCity.long];
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.updateLocationBasedOnCurrent();
    setTimeout(() => this.map.invalidateSize(), 1);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.map === undefined){
      return;
    }

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
    this.locationMarker = new L.Marker(this.defaultPoint,
        {icon: markerIcon, draggable: true});

    this.map = L.map(this.mapId, {center: this.defaultPoint, zoom: 16});
    tiles.addTo(this.map);
    this.locationMarker.addTo(this.map);

    this.map.addEventListener('click', (event) => {
      this.locationMarker.setLatLng(event.latlng);
      this.updateLocation(event.latlng.lat, event.latlng.lng);
    });
  }

  async updateLocationBasedOnCurrent(){
    if (!this.useCurrentLocation && this.location.coordinates.length === 0){
      return;
    }
    else if (this.location.coordinates.length !== 0){
      const lat = this.location.coordinates[1];
      const long = this.location.coordinates[0];
      this.setMapLocation(lat, long, 16);
    }
    else if (this.useCurrentLocation) {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        const lat = coordinates.coords.latitude;
        const long = coordinates.coords.longitude;
        this.setMapLocation(lat, long, 16);
      }
      catch (e) {
        this.setMapLocation(this.defaultPoint[0], this.defaultPoint[1], 16);
      }
    }
  }

  private setMapLocation(lat: number, long: number, zoom: number){
    this.locationMarker.setLatLng(L.latLng(lat, long));
    this.map.setView([lat, long], zoom);
    this.updateLocation(lat, long);
  }

  private updateLocation(lat: number, long: number){
    this.location = {type: 'Point', coordinates: [long, lat]};
    this.locationChange.emit(this.location);
  }
}
