import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Comment} from '../../entities/Comment';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-consultation-comment-text-bar',
  templateUrl: './consultation-comment-text-bar.component.html',
  styleUrls: ['./consultation-comment-text-bar.component.scss'],
})
export class ConsultationCommentTextBarComponent implements OnInit {

  userComment = '';
  @Input() userName: string;
  @Input() isReply: boolean;
  @Output() commentEmitter = new EventEmitter<Comment>();

  commentText = 'Σχόλιο';

  constructor(private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  addComment(){
    const comment = {
      userName: this.userName,
      text: this.userComment,
      replies: [],
      timestamp: (new Date()).getTime(),
      isReply: this.isReply
    };
    this.userComment = '';
    this.commentEmitter.emit(comment);
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'comment', callback: (res: string) => this.commentText = res});
  }
}
