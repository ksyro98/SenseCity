import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.page.html',
  styleUrls: ['./main-tab.page.scss'],
})
export class MainTabPage implements OnInit {

  public typeOfService = 0; // 0 --> technical, 1 --> administrative
  public query: string;

  constructor() { }

  ngOnInit() {
  }

  public servicesSegmentChanged(event: any){
    this.typeOfService = event.detail.value;
    console.log(this.typeOfService);
  }

  public onSearch(event){
    this.query = event.target.value.toLowerCase();
  }
}
