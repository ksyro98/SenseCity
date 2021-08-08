import {Category} from './Category';

export class OtherCategory implements Category {
    id: number;
    name: string;
    shortDescription: string;
    translationKey: string = null;
}

export function isOtherCategory(obj): obj is OtherCategory {
    return (
        obj.shortDescription !== undefined &&
        obj.id !== undefined &&
        obj.name !== undefined
    );
}
