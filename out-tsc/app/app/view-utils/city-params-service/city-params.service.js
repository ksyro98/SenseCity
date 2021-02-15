import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CityParamsService = class CityParamsService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    navigate(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.router.navigate(['../tabs/main-tab'], {
                relativeTo: this.route,
                queryParams: {
                    name: city.name,
                    lat: city.lat,
                    long: city.long,
                    zoom: city.zoom,
                    url: city.url,
                    polygon: city.polygon
                }
            });
        });
    }
};
CityParamsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CityParamsService);
export { CityParamsService };
//# sourceMappingURL=city-params.service.js.map