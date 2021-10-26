import {AfterViewInit, Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {CitiesModalComponent} from '../../view-utils/cities-modal/cities-modal.component';
import {CITIES} from '../../constants/Cities';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {RequestLocation} from '../../entities/RequestLocation';

@Component({
  selector: 'app-technical-form-map',
  templateUrl: './technical-form-map.component.html',
  styleUrls: ['./technical-form-map.component.scss'],
})
export class TechnicalFormMapComponent implements OnInit {

  private map;
  private locationMarker;
  city = CITIES[4];
  @Input() locationLatLng: RequestLocation;
  @Output() locationLatLngChange = new EventEmitter<RequestLocation>();

  location = 'Τοποθεσία';
  changeCity = 'Αλλαγή πόλης';

  constructor(public modalController: ModalController, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  async presentCitiesModal(){
    CitiesModalComponent.present(this.modalController, (city) => {
      this.city = city;
      this.locationLatLng = {type: 'Point', coordinates: [city.lat, city.long]};
      this.locationLatLngChange.emit(this.locationLatLng);
    });
  }

  setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'location', callback: (res: string) => this.location = res});
    this.localTranslateService.pairs.push({key: 'change-city', callback: (res: string) => this.changeCity = res});
  }
}
