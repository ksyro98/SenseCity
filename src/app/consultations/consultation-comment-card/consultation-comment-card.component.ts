import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../entities/Comment';
import {ModalController} from '@ionic/angular';
import {ConsultationCommentRepliesModalComponent} from '../consultation-comment-replies-modal/consultation-comment-replies-modal.component';

@Component({
  selector: 'app-consultation-comment-card',
  templateUrl: './consultation-comment-card.component.html',
  styleUrls: ['./consultation-comment-card.component.scss'],
})
export class ConsultationCommentCardComponent implements OnInit {

  @Input() comment: Comment;
  @Input() clickDisabled = false;
  @Input() hideRepliesText = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async presentRepliesModal(){
    const modal = await this.modalController.create({
      component: ConsultationCommentRepliesModalComponent,
      cssClass: 'general-modal-class',
      componentProps: {
        comment: this.comment
      }
    });
    modal.onDidDismiss().then((res) => {
      this.comment = res.data.comment;
    });
    return await modal.present();
  }
}
