import {GeneralNotification} from './GeneralNotification';
import {NotificationType} from './NotificationType';

export class CommentNotification extends GeneralNotification{
    userName: string;
    themeName: string;

    constructor(userName: string, themeName: string, read: boolean) {
        const text = 'Ο <b>' + userName + '</b> σχολίασε στο θέμα <b>' + themeName + '</b>.';
        const imageSrc = 'not_comment';
        super(text, imageSrc, read, NotificationType.COMMENT);
        this.userName = userName;
        this.themeName = themeName;
    }
}
