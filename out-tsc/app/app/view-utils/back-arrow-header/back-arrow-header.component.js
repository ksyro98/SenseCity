import { __decorate, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
// The code for this component was taken from Ionic's back button component
// https://github.com/ionic-team/ionic-framework/blob/main/angular/src/directives/navigation/ion-back-button.ts
let BackArrowHeaderComponent = class BackArrowHeaderComponent {
    constructor(routerOutlet, navCtrl, config) {
        this.routerOutlet = routerOutlet;
        this.navCtrl = navCtrl;
        this.config = config;
    }
    ngOnInit() { }
    onBackArrowPressed() {
        const defaultHref = this.defaultHref || this.config.get('backButtonDefaultHref');
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
            this.navCtrl.setDirection('back', undefined, undefined, null);
            this.routerOutlet.pop();
        }
        else if (defaultHref != null) {
            this.navCtrl.navigateBack(defaultHref, {});
        }
    }
};
__decorate([
    Input()
], BackArrowHeaderComponent.prototype, "title", void 0);
BackArrowHeaderComponent = __decorate([
    Component({
        selector: 'app-back-arrow-header',
        templateUrl: './back-arrow-header.component.html',
        styleUrls: ['./back-arrow-header.component.scss'],
    }),
    __param(0, Optional())
], BackArrowHeaderComponent);
export { BackArrowHeaderComponent };
//# sourceMappingURL=back-arrow-header.component.js.map