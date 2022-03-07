import { Injectable } from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackButtonService {

  private startingUrls = [
      '/tabs/main-tab',
      '/tabs/requests-tab',
      '/tabs/notifications-tab',
      '/tabs/more-tab'
  ];

  init() {
    this.platform.backButton.subscribeWithPriority(-1, async () => {
      const currentUrl = this.router.url;
      if (this.startingUrls.map(url => currentUrl.includes(url)).includes(true)) {
        // close the app
        (navigator as any).app.exitApp();
      }
      else if (currentUrl === '/select-city'){
        // do nothing
      }
      else if (currentUrl.includes('/no-internet')){
        (navigator as any).app.exitApp();
      }
      else {
        // go back
        this.navController.back();
      }
    });
  }

  constructor(
      private platform: Platform,
      private router: Router,
      private navController: NavController
  ) { }
}
