import { __awaiter, __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let NeighborhoodMapComponent = class NeighborhoodMapComponent {
    constructor(alertService, localTranslateService) {
        this.alertService = alertService;
        this.localTranslateService = localTranslateService;
        this.locationChange = new EventEmitter();
        this.registerNeighborhood = new EventEmitter();
        this.unregisterNeighborhood = new EventEmitter();
        this.receiveMessages = 'Ναι, θέλω να λαμβάνω ενημερώσεις για το σημείο ενδιαφέροντος που δήλωσα στον χάρτη!';
        this.delete = 'Διαγραφή';
        this.register = 'Καταχώρηση';
        this.deleteNeighborhoodHead = 'Διαγραφή Γειτονιάς';
        this.deleteNeighborhoodBody = 'Είσαι σίγουρος ότι θέλεις να σταματήσετε να λαμβάνετε μηνύματα για αυτή τη γειτονιά;';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    addNeighborhood() {
        return __awaiter(this, void 0, void 0, function* () {
            this.registerNeighborhood.emit();
        });
    }
    removeNeighborhood() {
        this.showRemoveAlert(() => this.unregisterNeighborhood.emit());
    }
    showRemoveAlert(callback) {
        const content = {
            head: this.deleteNeighborhoodHead,
            body: this.deleteNeighborhoodBody,
        };
        this.alertService.show(content, callback, true);
    }
    onLocationChange(location) {
        this.locationChange.emit(location);
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'receive-messages', callback: (res) => this.receiveMessages = res });
        this.localTranslateService.pairs.push({ key: 'delete', callback: (res) => this.delete = res });
        this.localTranslateService.pairs.push({ key: 'register', callback: (res) => this.register = res });
        this.localTranslateService.pairs.push({ key: 'delete-neighborhood-head', callback: (res) => this.deleteNeighborhoodHead = res });
        this.localTranslateService.pairs.push({ key: 'delete-neighborhood-body', callback: (res) => this.deleteNeighborhoodBody = res });
    }
};
__decorate([
    Input()
], NeighborhoodMapComponent.prototype, "neighborhood", void 0);
__decorate([
    Output()
], NeighborhoodMapComponent.prototype, "locationChange", void 0);
__decorate([
    Output()
], NeighborhoodMapComponent.prototype, "registerNeighborhood", void 0);
__decorate([
    Output()
], NeighborhoodMapComponent.prototype, "unregisterNeighborhood", void 0);
NeighborhoodMapComponent = __decorate([
    Component({
        selector: 'app-neighborhood-map',
        templateUrl: './neighborhood-map.component.html',
        styleUrls: ['./neighborhood-map.component.scss'],
    })
], NeighborhoodMapComponent);
export { NeighborhoodMapComponent };
//# sourceMappingURL=neighborhood-map.component.js.map