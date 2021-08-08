export class OtherCategory {
    constructor() {
        this.translationKey = null;
    }
}
export function isOtherCategory(obj) {
    return (obj.shortDescription !== undefined &&
        obj.id !== undefined &&
        obj.name !== undefined);
}
//# sourceMappingURL=OtherCategory.js.map