import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-request-details-location-bar',
  templateUrl: './request-details-location-bar.component.html',
  styleUrls: ['./request-details-location-bar.component.scss'],
})
export class RequestDetailsLocationBarComponent implements OnInit {

  @Input() location: string;
  @Input() mapIsHidden: boolean;

  constructor() { }

  ngOnInit() {}

}
