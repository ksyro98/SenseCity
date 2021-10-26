import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let SnackbarComponent = class SnackbarComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], SnackbarComponent.prototype, "text", void 0);
__decorate([
    Input()
], SnackbarComponent.prototype, "buttonText", void 0);
SnackbarComponent = __decorate([
    Component({
        selector: 'app-snackbar',
        templateUrl: './snackbar.component.html',
        styleUrls: ['./snackbar.component.scss'],
    })
], SnackbarComponent);
export { SnackbarComponent };
//# sourceMappingURL=snackbar.component.js.map