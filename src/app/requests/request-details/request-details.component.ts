import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {RequestDetailsMapModalComponent} from '../request-details-map-modal/request-details-map-modal.component';
import {RequestedService} from '../../entities/RequestedService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
})
export class RequestDetailsComponent implements OnInit {

  @Input() completed: boolean;
  locationName = 'ΠΕΟ Πάτρας Πύργου 250<br>Βραχναίικα 250 02, Ελλάδα';

  constructor(public modalController: ModalController, private router: ActivatedRoute) { }

  ngOnInit() {
    // we use === 'true' because the parameter passed is a string
    this.router.queryParams.subscribe(params => this.completed = params.completed === 'true');
  }

  async presentMapModal(){
    const modal = await this.modalController.create({
      component: RequestDetailsMapModalComponent,
      cssClass: 'general-modal-class',
      componentProps: {
        lat: 38.246242,
        long: 21.7350847,
        locationName: this.locationName
      }
    });
    return await modal.present();
  }
}
