import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TabsPage = class TabsPage {
    constructor(localTranslateService) {
        this.localTranslateService = localTranslateService;
        this.href = '';
        this.notifications = 'Ειδοποιήσεις';
        this.home = 'Αρχική';
        this.requests = 'Αιτήσεις';
        this.more = 'Περισσότερα';
        this.myNeighborhood = 'Γειτονιά';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'notifications-bottom-nav', callback: (res) => this.notifications = res });
        this.localTranslateService.pairs.push({ key: 'home-bottom-nav', callback: (res) => this.home = res });
        this.localTranslateService.pairs.push({ key: 'requests-bottom-nav', callback: (res) => this.requests = res });
        this.localTranslateService.pairs.push({ key: 'more-bottom-nav', callback: (res) => this.more = res });
        this.localTranslateService.pairs.push({ key: 'neighborhood', callback: (res) => this.myNeighborhood = res });
    }
};
TabsPage = __decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: 'tabs.page.html',
        styleUrls: ['tabs.page.scss']
    })
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map