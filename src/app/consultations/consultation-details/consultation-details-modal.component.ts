import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Consultation} from '../../entities/Consultation';
import {ModalController} from '@ionic/angular';
import {ConsultationCommentsModalComponent} from '../consultation-comments-modal/consultation-comments-modal.component';

@Component({
  selector: 'app-consultation-modal-details',
  templateUrl: './consultation-details-modal.component.html',
  styleUrls: ['./consultation-details-modal.component.scss'],
})
export class ConsultationDetailsModalComponent implements OnInit {

  @Input() consultation: Consultation;
  isHidden = true;

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  getNumberOfComments(): string{
    return this.consultation.comments === undefined
        ? '0'
        : this.consultation.comments.length.toString();
  }

  public onBackArrowPressed(){
    console.log('test');
    this.modalController.dismiss(this.consultation);
  }

  public rate(liked: boolean){
    switch (this.consultation.rating){
      case -1:
        if (liked){
          this.consultation.dislikes--;
          this.consultation.likes++;
          this.consultation.rating = 1;
        }
        else {
          this.consultation.dislikes--;
          this.consultation.rating = 0;
        }
        break;
      case 0:
        if (liked){
          this.consultation.likes++;
          this.consultation.rating = 1;
        }
        else {
          this.consultation.dislikes++;
          this.consultation.rating = -1;
        }
        break;
      case 1:
        if (!liked){
          this.consultation.likes--;
          this.consultation.dislikes++;
          this.consultation.rating = -1;
        }
        else {
          this.consultation.likes--;
          this.consultation.rating = 0;
        }
    }
  }

  public toggleFollows(){
    this.consultation.follows = !this.consultation.follows;
  }

  public async presentCommentsModal(){
      const modal = await this.modalController.create({
        component: ConsultationCommentsModalComponent,
        cssClass: 'general-modal-class',
        componentProps: {
          comments: this.consultation.comments
        }
      });
      modal.onDidDismiss().then((res) => {
        this.consultation.comments = res.data.comments;
      });
      return await modal.present();
  }

  @HostListener('document:ionBackButton', ['$event'])
  private async overrideHardwareBackAction($event: any) {
    this.onBackArrowPressed();
  }
}
