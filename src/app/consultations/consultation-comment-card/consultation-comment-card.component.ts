import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../entities/Comment';

@Component({
  selector: 'app-consultation-comment-card',
  templateUrl: './consultation-comment-card.component.html',
  styleUrls: ['./consultation-comment-card.component.scss'],
})
export class ConsultationCommentCardComponent implements OnInit {

  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {}

}
