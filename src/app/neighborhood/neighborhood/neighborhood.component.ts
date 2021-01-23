import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighborhood',
  templateUrl: './neighborhood.component.html',
  styleUrls: ['./neighborhood.component.scss'],
})
export class NeighborhoodComponent implements OnInit {

  neighborhoodSegment = 0;

  constructor() { }

  ngOnInit() {}

  neighborhoodSegmentChanged(event: any){
    this.neighborhoodSegment = event.detail.value;
  }
}
