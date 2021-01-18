import { Component, OnInit } from '@angular/core';

import { TechnicalItemComponent } from '../../technical-request/technical-item/technical-item.component';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.page.html',
  styleUrls: ['./main-tab.page.scss'],
})
export class MainTabPage implements OnInit {

  public typeOfService = 0; // 0 --> technical, 1 --> administrative

  constructor() { }

  ngOnInit() {
  }

  public servicesSegmentChanged(event: any){
    this.typeOfService = event.detail.value;
  }
}
