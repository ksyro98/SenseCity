import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {

  @Input() fullScreen: boolean;
  @Input() selectedStars = -1;
  @Output() selectedStarsChange = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit() {}

  starClicked(which: number){
    this.selectedStars = which;
    this.selectedStarsChange.emit(which);
    if (!this.fullScreen){
      this.router.navigate(['/request-rating'], {queryParams: {stars: which}});
    }
  }
}
