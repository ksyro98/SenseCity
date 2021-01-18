import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { RequestDetailsMapModalComponent } from '../request-details-map-modal/request-details-map-modal.component';
let RequestDetailsComponent = class RequestDetailsComponent {
    constructor(modalController, router) {
        this.modalController = modalController;
        this.router = router;
        this.locationName = 'ΠΕΟ Πάτρας Πύργου 250<br>Βραχναίικα 250 02, Ελλάδα';
    }
    ngOnInit() {
        // we use === 'true' because the parameter passed is a string
        this.router.queryParams.subscribe(params => this.completed = params.completed === 'true');
    }
    presentMapModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: RequestDetailsMapModalComponent,
                cssClass: 'map-modal-class',
                componentProps: {
                    lat: 38.246242,
                    long: 21.7350847,
                    locationName: this.locationName
                }
            });
            return yield modal.present();
        });
    }
};
__decorate([
    Input()
], RequestDetailsComponent.prototype, "completed", void 0);
RequestDetailsComponent = __decorate([
    Component({
        selector: 'app-request-details',
        templateUrl: './request-details.component.html',
        styleUrls: ['./request-details.component.scss'],
    })
], RequestDetailsComponent);
export { RequestDetailsComponent };
//# sourceMappingURL=request-details.component.js.map