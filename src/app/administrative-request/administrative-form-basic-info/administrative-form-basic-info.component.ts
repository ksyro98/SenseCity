import { Component, OnInit } from '@angular/core';
import {PROFILE_ELEMENTS} from '../../constants/ProfileElements';
import {ProfileElement} from '../../entities/ProfileElement';

@Component({
  selector: 'app-administrative-form-basic-info',
  templateUrl: './administrative-form-basic-info.component.html',
  styleUrls: ['./administrative-form-basic-info.component.scss'],
})
export class AdministrativeFormBasicInfoComponent implements OnInit {

  elements: ProfileElement[];

  constructor() {
    this.elements = PROFILE_ELEMENTS;
  }

  ngOnInit() { }

}


