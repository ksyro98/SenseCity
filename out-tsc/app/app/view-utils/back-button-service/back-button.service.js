import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let BackButtonService = class BackButtonService {
    constructor(platform, router, navController) {
        this.platform = platform;
        this.router = router;
        this.navController = navController;
        this.startingUrls = [
            '/tabs/main-tab',
            '/tabs/requests-tab',
            '/tabs/notifications-tab',
            '/tabs/more-tab'
        ];
    }
    init() {
        this.platform.backButton.subscribeWithPriority(-1, () => __awaiter(this, void 0, void 0, function* () {
            const currentUrl = this.router.url;
            if (this.startingUrls.map(url => currentUrl.includes(url)).includes(true)) {
                // close the app
                navigator.app.exitApp();
            }
            else if (currentUrl === '/select-city') {
                // do nothing
            }
            else {
                // go back
                this.navController.back();
            }
        }));
    }
};
BackButtonService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BackButtonService);
export { BackButtonService };
//# sourceMappingURL=back-button.service.js.map