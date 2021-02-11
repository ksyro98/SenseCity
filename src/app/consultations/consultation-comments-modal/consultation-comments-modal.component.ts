import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Comment} from '../../entities/Comment';

@Component({
  selector: 'app-consultation-comments-modal',
  templateUrl: './consultation-comments-modal.component.html',
  styleUrls: ['./consultation-comments-modal.component.scss'],
})
export class ConsultationCommentsModalComponent implements OnInit {

  @Input() comments: Comment[];
  userName = 'Κωνσταντινος Συροκωστας';
  userComment = '';

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this.modalController.dismiss({
      comments: this.comments
    });
  }

  addComment(comment: Comment){
    // const comment = {
    //   userName: 'Κωνσταντινος Συροκωστας',
    //   text: this.userComment,
    //   replies: [],
    //   timestamp: (new Date()).getTime(),
    //   isReply: false
    // };
    this.comments.splice(0, 0, comment);
    // this.userComment = '';
  }

  setUserComment(value: string){
    this.userComment = value;
  }

  @HostListener('document:ionBackButton', ['$event'])
  private async overrideHardwareBackAction($event: any) {
    this.dismissModal();
  }
}
