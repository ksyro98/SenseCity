import {GeneralNotification} from './GeneralNotification';
import {NotificationType} from './NotificationType';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

export class CommentReplyNotification extends GeneralNotification{
    userName: string;

    beforeNameText;
    repliedText;

    constructor(userName: string, read: boolean, localTranslateService: LocalTranslateService) {
        const text = 'Ο <b>' + userName + '</b> απάντησε στο σχόλιο σας.';
        const imageSrc = 'not_reply';
        super(text, imageSrc, read, NotificationType.COMMENT_REPLY, localTranslateService);
        this.userName = userName;

        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
    }

    private setTranslationPairs(){
        this.localTranslateService.pairs.push({key: 'before-name-text', callback: (res: string) => {
                this.beforeNameText = res;
                if (this.repliedText === undefined) { this.repliedText = ''; }
                this.text = this.beforeNameText + '<b>' + this.userName + '</b> ' + this.repliedText;
                return null;
            }});

        this.localTranslateService.pairs.push({key: 'replied-text', callback: (res: string) => {
                this.repliedText = res;
                if (this.beforeNameText === undefined) { this.beforeNameText = ''; }
                this.text = this.beforeNameText + '<b>' + this.userName + '</b> ' + this.repliedText;
                return null;
            }});
    }
}
