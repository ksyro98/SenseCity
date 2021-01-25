import {Component, Input, OnInit} from '@angular/core';
import {RequestedService} from '../../entities/RequestedService';

@Component({
  selector: 'app-administrative-card',
  templateUrl: './administrative-card.component.html',
  styleUrls: ['./administrative-card.component.scss'],
})
export class AdministrativeCardComponent implements OnInit {

  @Input() service: RequestedService;

  constructor() { }

  ngOnInit() {}

}
