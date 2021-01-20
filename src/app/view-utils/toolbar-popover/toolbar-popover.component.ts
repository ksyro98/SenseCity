import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-toolbar-popover',
  templateUrl: './toolbar-popover.component.html',
  styleUrls: ['./toolbar-popover.component.scss'],
})
export class ToolbarPopoverComponent implements OnInit {

  @Input() showingRead: boolean;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  dismiss(item: number){
    this.popoverController.dismiss(item);
  }

}
