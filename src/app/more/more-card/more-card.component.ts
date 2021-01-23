import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-more-card',
  templateUrl: './more-card.component.html',
  styleUrls: ['./more-card.component.scss'],
})
export class MoreCardComponent implements OnInit {

  @Input() image;
  @Input() title;
  @Input() routeTarget;

  constructor(private router: Router) { }

  ngOnInit() {}

  navigate(){
    if (this.routeTarget.startsWith('http')){
      window.location.href = this.routeTarget;
    }
    this.router.navigate([this.routeTarget]);
  }

}
