import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests-tab',
  templateUrl: './requests-tab.page.html',
  styleUrls: ['./requests-tab.page.scss'],
})
export class RequestsTabPage implements OnInit {

  public completedRequests = 0; // 0 --> not completed, 1 --> completed

  constructor() { }

  ngOnInit() {
  }

  public servicesSegmentChanged(event: any){
    this.completedRequests = event.detail.value;
  }
}
