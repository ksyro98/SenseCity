import {GeneralNotification} from './GeneralNotification';
import {NotificationType} from './NotificationType';

export class CommentReplyNotification extends GeneralNotification{
    userName: string;

    constructor(userName: string, read: boolean) {
        const text = 'Ο <b>' + userName + '</b> απάντησε στο σχόλιο σας.';
        const imageSrc = 'not_reply';
        super(text, imageSrc, read, NotificationType.COMMENT_REPLY);
        this.userName = userName;
    }
}
