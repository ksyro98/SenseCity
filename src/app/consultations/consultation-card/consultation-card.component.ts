import {Component, Input, OnInit} from '@angular/core';
import {Consultation} from '../../entities/Consultation';
import {mapMonth} from '../../utils/date-utils';
import {ModalController} from '@ionic/angular';
import {ConsultationDetailsModalComponent} from '../consultation-details/consultation-details-modal.component';

@Component({
  selector: 'app-consultation-card',
  templateUrl: './consultation-card.component.html',
  styleUrls: ['./consultation-card.component.scss'],
})
export class ConsultationCardComponent implements OnInit {

  @Input() consultation: Consultation;

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  getDay(): string {
    return this.consultation.date.getDate().toString();
  }

  getMonth(): string {
    return mapMonth(this.consultation.date.getMonth());
  }

  getYear(): string {
    return this.consultation.date.getFullYear().toString();
  }

  async presentDetailsModal() {
    const modal = await this.modalController.create({
      component: ConsultationDetailsModalComponent,
      cssClass: 'general-modal-class',
      componentProps: {
        consultation: this.consultation
      }
    });
    modal.onDidDismiss().then(res => {
      this.consultation.likes = res.data.likes;
      this.consultation.dislikes = res.data.dislikes;
      this.consultation.rating = res.data.rating;
      this.consultation.follows = res.data.follows;
    });
    return await modal.present();
  }

}
