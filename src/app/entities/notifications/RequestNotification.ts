import {GeneralNotification} from './GeneralNotification';
import {NotificationType} from './NotificationType';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

export class RequestNotification extends GeneralNotification{
    requestType: string;
    rating: number;

    requestText;
    completedText;

    constructor(requestType: string, rating: number, read: boolean, localTranslateService: LocalTranslateService) {
        const text = 'Το αίτημα σας (<b>' + requestType + '</b>) ολόκληρώθηκε.';
        const imageSrc = 'not_request';
        super(text, imageSrc, read, NotificationType.REQUEST, localTranslateService);
        this.requestType = requestType;
        this.rating = rating;

        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
    }

    private setTranslationPairs(){
        this.localTranslateService.pairs.push({key: 'request-notification-text', callback: (res: string) => {
                this.requestText = res;
                if (this.completedText === undefined) { this.completedText = ''; }
                this.text = this.requestText + ' (<b>' + this.requestType + '</b>) ' + this.completedText + '.';
                return null;
            }});

        this.localTranslateService.pairs.push({key: 'completed-notification-text', callback: (res: string) => {
                this.completedText = res;
                if (this.requestText === undefined) { this.requestText = ''; }
                this.text = this.requestText + ' (<b>' + this.requestType + '</b>) ' + this.completedText + '.';
                return null;
            }});
    }
}
