import {Component, Input, OnInit} from '@angular/core';
import {Consultation} from '../../entities/Consultation';
import {mapMonth} from '../../utils/date-utils';

@Component({
  selector: 'app-consultation-card',
  templateUrl: './consultation-card.component.html',
  styleUrls: ['./consultation-card.component.scss'],
})
export class ConsultationCardComponent implements OnInit {

  @Input() consultation: Consultation;

  constructor() { }

  ngOnInit() {}

  getDay(): string {
    return this.consultation.date.getDate().toString();
  }

  getMonth(): string {
    return mapMonth(this.consultation.date.getMonth());
  }

  getYear(): string {
    return this.consultation.date.getFullYear().toString();
  }

}
