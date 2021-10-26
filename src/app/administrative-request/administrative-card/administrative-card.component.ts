import {Component, Input, OnInit} from '@angular/core';
import {Service} from '../../entities/Service';

@Component({
  selector: 'app-administrative-card',
  templateUrl: './administrative-card.component.html',
  styleUrls: ['./administrative-card.component.scss'],
})
export class AdministrativeCardComponent implements OnInit {

  @Input() service: Service;

  constructor() { }

  ngOnInit() {}

}
