import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { CitiesModalComponent } from '../../view-utils/cities-modal/cities-modal.component';
let ProfileComponent = class ProfileComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.focus = false;
        this.city = 'Πάτρα';
        this.elements = [];
    }
    ngOnInit() {
        this.setElements();
    }
    presentCitiesModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: CitiesModalComponent,
                cssClass: 'cities-modal-class',
            });
            modal.onDidDismiss()
                .then((data) => {
                if (data.data.name !== undefined) {
                    this.city = data.data.name;
                }
            });
            return yield modal.present();
        });
    }
    setElements() {
        this.elements.push({
            label: 'Όνομα',
            value: 'Κωνσταντίνος Συροκώστας',
            inputType: 'text'
        });
        this.elements.push({
            label: 'Email',
            value: 'konstantinos.syrokostas@gmail.com',
            inputType: 'email'
        });
        this.elements.push({
            label: 'Τηλέφωνο',
            value: '6980082464',
            inputType: 'tel'
        });
        this.elements.push({
            label: 'Όνομα πατέρα',
            value: 'Γεώργιος Συροκώστας',
            inputType: 'text'
        });
        this.elements.push({
            label: 'Όνομα μητέρας',
            value: 'Αναστασία Βαρουτίδου',
            inputType: 'text'
        });
        this.elements.push({
            label: 'ΑΔΤ',
            value: 'ΑΑ 123456',
            inputType: 'text'
        });
        this.elements.push({
            label: 'ΑΦΜ',
            value: '123456789012345',
            inputType: 'number'
        });
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss'],
    })
], ProfileComponent);
export { ProfileComponent };
// interface CityElement extends Element {
//   label: string;
//   value: string;
//   inputType: string;
// }
//# sourceMappingURL=profile.component.js.map