import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ToolbarPopoverComponent = class ToolbarPopoverComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() { }
    dismiss(item) {
        this.popoverController.dismiss(item);
    }
};
__decorate([
    Input()
], ToolbarPopoverComponent.prototype, "showingRead", void 0);
ToolbarPopoverComponent = __decorate([
    Component({
        selector: 'app-toolbar-popover',
        templateUrl: './toolbar-popover.component.html',
        styleUrls: ['./toolbar-popover.component.scss'],
    })
], ToolbarPopoverComponent);
export { ToolbarPopoverComponent };
//# sourceMappingURL=toolbar-popover.component.js.map