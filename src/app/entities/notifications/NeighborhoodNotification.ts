import {GeneralNotification} from './GeneralNotification';
import {NotificationType} from './NotificationType';

export class NeighborhoodNotification extends GeneralNotification{
    constructor(read: boolean) {
        const text = 'Έχετε ένα νέο μήνυμα για τη γειτονιά σας.';
        const imageSrc = 'not_neighborhood';
        super(text, imageSrc, read, NotificationType.NEIGHBORHOOD);
    }
}
