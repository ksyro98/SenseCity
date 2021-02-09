import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;
let NeighborhoodMapComponent = class NeighborhoodMapComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    addNeighborhood() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Toast.show({
                text: 'Η γειτονια σας ανανεωθηκε!'
            });
        });
    }
    removeNeighborhood() {
        this.showRemoveAlert(() => { });
    }
    showRemoveAlert(callback) {
        const content = {
            head: 'Διαγραφή Γειτονιάς',
            body: 'Είσαι σίγουρος ότι θέλεις να σταματήσετε να λαμβάνετε μηνύματα για αυτή τη γειτονιά;',
        };
        this.alertService.showAlert(content, callback, true);
    }
};
NeighborhoodMapComponent = __decorate([
    Component({
        selector: 'app-neighborhood-map',
        templateUrl: './neighborhood-map.component.html',
        styleUrls: ['./neighborhood-map.component.scss'],
    })
], NeighborhoodMapComponent);
export { NeighborhoodMapComponent };
//# sourceMappingURL=neighborhood-map.component.js.map