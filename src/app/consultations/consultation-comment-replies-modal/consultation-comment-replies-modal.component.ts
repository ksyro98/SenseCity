import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Comment} from '../../entities/Comment';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-consultation-comment-replies-modal',
  templateUrl: './consultation-comment-replies-modal.component.html',
  styleUrls: ['./consultation-comment-replies-modal.component.scss'],
})
export class ConsultationCommentRepliesModalComponent implements OnInit {

  @Input() comment: Comment;
  userName = 'Κωνσταντινος Συροκωστας';

  replies = 'Απαντήσεις';

  constructor(private modalController: ModalController, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  addComment(comment: Comment){
    this.comment.replies.push(comment);
  }

  onBackPressed(){
    this.modalController.dismiss({ comment: this.comment });
  }

  @HostListener('document:ionBackButton', ['$event'])
  private async overrideHardwareBackAction($event: any) {
    this.onBackPressed();
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'replies', callback: (res: string) => this.replies = res});
  }
}
