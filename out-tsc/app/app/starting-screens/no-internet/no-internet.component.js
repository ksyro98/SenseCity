import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Network } = Plugins;
let NoInternetComponent = class NoInternetComponent {
    constructor(router, route, navController) {
        this.router = router;
        this.route = route;
        this.navController = navController;
    }
    ngOnInit() {
        Network.addListener('networkStatusChange', status => {
            if (status.connected) {
                this.navController.back();
            }
        });
    }
};
NoInternetComponent = __decorate([
    Component({
        selector: 'app-no-internet',
        templateUrl: './no-internet.component.html',
        styleUrls: ['./no-internet.component.scss'],
    })
], NoInternetComponent);
export { NoInternetComponent };
//# sourceMappingURL=no-internet.component.js.map