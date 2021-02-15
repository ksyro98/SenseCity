import { Component, OnInit } from '@angular/core';
import {CITIES} from '../../constants/Cities';

@Component({
  selector: 'app-more-tab',
  templateUrl: './more-tab.page.html',
  styleUrls: ['./more-tab.page.scss'],
})
export class MoreTabPage implements OnInit {

  // We will retrieve this value from the user's selected city.
  city = CITIES[4];

  constructor() { }

  ngOnInit() {
  }

}
