import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;
let ToastService = class ToastService {
    constructor() { }
    toast(text) {
    }
};
ToastService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ToastService);
export { ToastService };
//# sourceMappingURL=toast.service.js.map