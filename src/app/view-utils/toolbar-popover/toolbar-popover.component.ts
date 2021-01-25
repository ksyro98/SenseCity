import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-toolbar-popover',
  templateUrl: './toolbar-popover.component.html',
  styleUrls: ['./toolbar-popover.component.scss'],
})
export class ToolbarPopoverComponent implements OnInit {

  @Input() items: string[];

  static async present(
      popoverController: PopoverController, ev: Event,
      inputItems: string[], onDismiss: (which: number) => void
  ) {
    const popover = await popoverController.create({
      component: ToolbarPopoverComponent,
      cssClass: 'toolbar-popover-class',
      event: ev,
      translucent: true,
      componentProps: {
        items: inputItems
      }
    });

    popover.onDidDismiss().then((data) => {
      onDismiss(data.data);
    });

    return await popover.present();
  }

  constructor(public popoverController: PopoverController) { }

  ngOnInit() { }

  dismiss(which: number){
    this.popoverController.dismiss(which);
  }

}
