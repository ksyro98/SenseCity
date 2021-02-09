import {Component, Input, OnInit} from '@angular/core';
import {Consultation} from '../../entities/Consultation';
import {mapMonth} from '../../utils/date-utils';
import {Router} from '@angular/router';
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
    // this.router.navigate(['/consultations/details'], {
    //   queryParams: {
    //     name: this.consultation.name,
    //     text: this.consultation.text,
    //     files: this.consultation.files,
    //     comments: this.consultation.comments,
    //     follows: this.consultation.follows,
    //     rating: this.consultation.rating,
    //     likes: this.consultation.likes,
    //     dislikes: this.consultation.dislikes,
    //     date: this.consultation.date
    //   }
    // });

    const modal = await this.modalController.create({
      component: ConsultationDetailsModalComponent,
      cssClass: 'general-modal-class',
      componentProps: {
        consultation: this.consultation
      }
    });
    modal.onDidDismiss().then(data => {
      this.consultation.likes = data.data.likes;
      this.consultation.dislikes = data.data.dislikes;
      this.consultation.rating = data.data.rating;
      this.consultation.follows = data.data.follows;
    });
    return await modal.present();
  }

}
