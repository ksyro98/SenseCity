import { __awaiter } from "tslib";
import { ADMINISTRATIVE_SERVICES_LIST, TECHNICAL_SERVICES_LIST } from '../entities/RequestedService';
export class ServicesCommunication {
    constructor() { }
    getServices(typeOfService) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (typeOfService) {
                case 0:
                    return TECHNICAL_SERVICES_LIST;
                case 1:
                    return ADMINISTRATIVE_SERVICES_LIST;
            }
            return [];
        });
    }
}
//# sourceMappingURL=ServicesCommunication.js.map