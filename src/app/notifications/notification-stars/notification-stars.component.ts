import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notification-stars',
  templateUrl: './notification-stars.component.html',
  styleUrls: ['./notification-stars.component.scss'],
})
export class NotificationStarsComponent implements OnInit {

  @Input() selectedStars = -1;
  @Output() selectedStarsChange = new EventEmitter<number>();
  @Input() read: boolean;

  constructor(private router: Router) { }

  ngOnInit() {}

  starClicked(which: number){
    if (this.read) {
      return;
    }

    this.selectedStars = which;
    this.selectedStarsChange.emit(which);
    this.router.navigate(['/request-rating'], {queryParams: {stars: which}});
  }
}
