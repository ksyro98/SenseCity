import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {

  @Input() isLast: boolean;
  @Input() completed: boolean;
  selectedStars = -1;

  constructor(private router: Router) { }

  ngOnInit() {}

  areStarsPressed(){
    return !(this.selectedStars === -1);
  }

  navigateToDetailsScreen(){
    if (this.areStarsPressed()){
      this.selectedStars = -1;
      return;
    }
    this.router.navigate(['/request-details'], {queryParams: {completed: this.completed}});
  }
}
