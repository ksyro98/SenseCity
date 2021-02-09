import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-bottom-bar',
  templateUrl: './details-bottom-bar.component.html',
  styleUrls: ['./details-bottom-bar.component.scss'],
})
export class DetailsBottomBarComponent implements OnInit {

  @Input() text: string;
  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {}

}
