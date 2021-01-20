import {GeneralNotification} from './GeneralNotification';
import {NotificationType} from './NotificationType';

export class RequestNotification extends GeneralNotification{
    requestType: string;
    rating: number;

    constructor(requestType: string, rating: number, read: boolean) {
        const text = 'Το αίτημα σας (<b>' + requestType + '</b>) ολόκληρώθηκε.';
        const imageSrc = 'not_request';
        super(text, imageSrc, read, NotificationType.REQUEST);
        this.requestType = requestType;
        this.rating = rating;
    }
}
