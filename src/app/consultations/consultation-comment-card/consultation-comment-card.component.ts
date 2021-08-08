import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../entities/Comment';
import {ModalController} from '@ionic/angular';
import {ConsultationCommentRepliesModalComponent} from '../consultation-comment-replies-modal/consultation-comment-replies-modal.component';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-consultation-comment-card',
  templateUrl: './consultation-comment-card.component.html',
  styleUrls: ['./consultation-comment-card.component.scss'],
})
export class ConsultationCommentCardComponent implements OnInit {

  @Input() comment: Comment;
  @Input() clickDisabled = false;
  @Input() hideRepliesText = false;

  replies = 'Απαντήσεις';

  constructor(private modalController: ModalController, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

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

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'replies', callback: (res: string) => this.replies = res});
  }
}
