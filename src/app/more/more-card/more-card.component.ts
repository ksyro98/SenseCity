import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-more-card',
  templateUrl: './more-card.component.html',
  styleUrls: ['./more-card.component.scss'],
})
export class MoreCardComponent implements OnInit {

  @Input() image;
  @Input() title;
  @Input() routeTarget;

  constructor() { }

  ngOnInit() {}

}
