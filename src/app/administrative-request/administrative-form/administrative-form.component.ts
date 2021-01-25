import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdministrativeRequest} from '../../entities/AdministrativeRequest';
import {RequestedService} from '../../entities/RequestedService';

@Component({
  selector: 'app-administrative-form',
  templateUrl: './administrative-form.component.html',
  styleUrls: ['./administrative-form.component.scss'],
})
export class AdministrativeFormComponent implements OnInit {

  request: AdministrativeRequest;
  currentStep = 0;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      const service: RequestedService = {
        id: parseInt(params.service_id, 10),
        name: params.service_name,
        icon: ''
      };
    });
  }

  setCurrentStep(currentStep: number){
    this.currentStep = currentStep;
  }

}

