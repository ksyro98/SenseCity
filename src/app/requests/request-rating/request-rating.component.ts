import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-request-rating',
  templateUrl: './request-rating.component.html',
  styleUrls: ['./request-rating.component.scss'],
})
export class RequestRatingComponent implements OnInit {

  stars = -1;

  constructor(private location: Location, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => this.stars = Number(params.stars));
  }

  public back(){
    this.location.back();
  }

}
