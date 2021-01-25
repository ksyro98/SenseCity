var ToolbarPopoverComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ToolbarPopoverComponent = ToolbarPopoverComponent_1 = class ToolbarPopoverComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    static present(popoverController, ev, inputItems, onDismiss) {
        return __awaiter(this, void 0, void 0, function* () {
            const popover = yield popoverController.create({
                component: ToolbarPopoverComponent_1,
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
            return yield popover.present();
        });
    }
    ngOnInit() { }
    dismiss(which) {
        this.popoverController.dismiss(which);
    }
};
__decorate([
    Input()
], ToolbarPopoverComponent.prototype, "items", void 0);
ToolbarPopoverComponent = ToolbarPopoverComponent_1 = __decorate([
    Component({
        selector: 'app-toolbar-popover',
        templateUrl: './toolbar-popover.component.html',
        styleUrls: ['./toolbar-popover.component.scss'],
    })
], ToolbarPopoverComponent);
export { ToolbarPopoverComponent };
//# sourceMappingURL=toolbar-popover.component.js.map