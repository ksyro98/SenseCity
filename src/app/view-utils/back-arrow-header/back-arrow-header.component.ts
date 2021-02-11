import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-back-arrow-header',
  templateUrl: './back-arrow-header.component.html',
  styleUrls: ['./back-arrow-header.component.scss'],
})
export class BackArrowHeaderComponent implements OnInit {

  @Input() title: string;

  constructor(private location: Location) { }

  ngOnInit() {}

  public onBackArrowPressed(){
    this.location.back();
  }
}
