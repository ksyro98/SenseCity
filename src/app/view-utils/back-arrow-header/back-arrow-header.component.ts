import {Component, Input, OnInit, Optional} from '@angular/core';
import {Config, IonRouterOutlet, NavController, Platform} from '@ionic/angular';



// The code for this component was taken from Ionic's back button component
// https://github.com/ionic-team/ionic-framework/blob/main/angular/src/directives/navigation/ion-back-button.ts

@Component({
  selector: 'app-back-arrow-header',
  templateUrl: './back-arrow-header.component.html',
  styleUrls: ['./back-arrow-header.component.scss'],
})
export class BackArrowHeaderComponent implements OnInit {

  @Input() title: string;

  defaultHref: string | undefined | null;

  constructor(@Optional() private routerOutlet: IonRouterOutlet, private navCtrl: NavController, private config: Config) { }

  ngOnInit() {}

  public onBackArrowPressed(){
    const defaultHref = this.defaultHref || this.config.get('backButtonDefaultHref');

    if (this.routerOutlet && this.routerOutlet.canGoBack()) {
      this.navCtrl.setDirection('back', undefined, undefined, null);
      this.routerOutlet.pop();
    }
    else if (defaultHref != null) {
      this.navCtrl.navigateBack(defaultHref, { });
    }
  }
}
