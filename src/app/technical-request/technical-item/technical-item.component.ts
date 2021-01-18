import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-technical-item',
  templateUrl: './technical-item.component.html',
  styleUrls: ['./technical-item.component.scss'],
})
export class TechnicalItemComponent implements OnInit {

  @Input() text: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {}

}
