import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NeighborhoodMessagesComponent = class NeighborhoodMessagesComponent {
    constructor(logic, localTranslateService) {
        this.logic = logic;
        this.localTranslateService = localTranslateService;
        this.noMessagesText = 'Δυστυχώς δεν βρέθηκαν μηνύματα στη θυρίδα σας.';
        this.setTranslationPairs();
    }
    ngOnInit() {
        this.localTranslateService.translateLanguage();
        this.messages$ = this.logic.getMessages();
        this.messages$.subscribe(x => console.log(x));
    }
    setTranslationPairs() {
        this.localTranslateService.pairs.push({ key: 'no-messages-text', callback: (res) => this.noMessagesText = res });
    }
};
NeighborhoodMessagesComponent = __decorate([
    Component({
        selector: 'app-neighborhood-messages',
        templateUrl: './neighborhood-messages.component.html',
        styleUrls: ['./neighborhood-messages.component.scss'],
    })
], NeighborhoodMessagesComponent);
export { NeighborhoodMessagesComponent };
//# sourceMappingURL=neighborhood-messages.component.js.map