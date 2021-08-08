import {GeneralNotification} from './GeneralNotification';
import {NotificationType} from './NotificationType';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

export class CommentNotification extends GeneralNotification{
    userName: string;
    themeName: string;

    beforeNameText;
    commentedText;

    constructor(userName: string, themeName: string, read: boolean, localTranslateService: LocalTranslateService) {
        const text = 'Ο <b>' + userName + '</b> σχολίασε στο θέμα <b>' + themeName + '</b>.';
        const imageSrc = 'not_comment';
        super(text, imageSrc, read, NotificationType.COMMENT, localTranslateService);
        this.userName = userName;
        this.themeName = themeName;

        this.setTranslationPairs();
        this.localTranslateService.translateLanguage();
    }

    private setTranslationPairs(){
        this.localTranslateService.pairs.push({key: 'before-name-text', callback: (res: string) => {
            this.beforeNameText = res;
            if (this.commentedText === undefined) { this.commentedText = ''; }
            this.text = this.beforeNameText + '<b>' + this.userName + '</b> ' + this.commentedText + ' <b>' + this.themeName + '</b>.';
            return null;
        }});

        this.localTranslateService.pairs.push({key: 'commented-text', callback: (res: string) => {
            this.commentedText = res;
            if (this.beforeNameText === undefined) { this.beforeNameText = ''; }
            this.text = this.beforeNameText + '<b>' + this.userName + '</b> ' + this.commentedText + ' <b>' + this.themeName + '</b>.';
            return null;
        }});
    }
}
