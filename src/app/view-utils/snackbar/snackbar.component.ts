import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {

  @Input() text;
  @Input() buttonText;

  constructor() { }

  ngOnInit() {}

}
