import {GeneralNotification} from './GeneralNotification';
import {NotificationType} from './NotificationType';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

export class NeighborhoodNotification extends GeneralNotification{

    constructor(read: boolean, localTranslateService: LocalTranslateService) {
        const text = 'Έχετε ένα νέο μήνυμα για τη γειτονιά σας.';
        const imageSrc = 'not_neighborhood';
        super(text, imageSrc, read, NotificationType.NEIGHBORHOOD, localTranslateService);

        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
    }

    private setTranslationPairs(){
        this.localTranslateService.pairs.push({key: 'neighborhood-notification-text', callback: (res: string) => this.text = res});
    }
}
