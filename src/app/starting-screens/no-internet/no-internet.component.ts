import { Component, OnInit } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';

const {Network} = Plugins;

@Component({
  selector: 'app-no-internet',
  templateUrl: './no-internet.component.html',
  styleUrls: ['./no-internet.component.scss'],
})
export class NoInternetComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private navController: NavController) { }

  ngOnInit() {
    Network.addListener('networkStatusChange', status => {
      if (status.connected){
        this.navController.back();
      }
    });
  }

}
