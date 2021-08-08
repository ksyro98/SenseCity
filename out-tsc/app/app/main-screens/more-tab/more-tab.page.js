import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CITIES } from '../../constants/Cities';
let MoreTabPage = class MoreTabPage {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        // We will retrieve this value from the user's selected city.
        this.city = CITIES[4];
        this.discussions = 'Διαβουλεύσεις';
        this.myNeighborhood = 'Η γειτονιά μου';
        this.map = 'Χάρτης';
        this.profile = 'Προφίλ';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'discussions', callback: (res) => this.discussions = res });
        this.localTranslateService.pairs.push({ key: 'my-neighborhood', callback: (res) => this.myNeighborhood = res });
        this.localTranslateService.pairs.push({ key: 'map', callback: (res) => this.map = res });
        this.localTranslateService.pairs.push({ key: 'profile', callback: (res) => this.profile = res });
    }
};
MoreTabPage = __decorate([
    Component({
        selector: 'app-more-tab',
        templateUrl: './more-tab.page.html',
        styleUrls: ['./more-tab.page.scss'],
    })
], MoreTabPage);
export { MoreTabPage };
//# sourceMappingURL=more-tab.page.js.map