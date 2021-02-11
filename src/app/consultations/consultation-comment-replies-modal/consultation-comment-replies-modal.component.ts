import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Comment} from '../../entities/Comment';

@Component({
  selector: 'app-consultation-comment-replies-modal',
  templateUrl: './consultation-comment-replies-modal.component.html',
  styleUrls: ['./consultation-comment-replies-modal.component.scss'],
})
export class ConsultationCommentRepliesModalComponent implements OnInit {

  @Input() comment: Comment;
  userName = 'Κωνσταντινος Συροκωστας';

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

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

}
