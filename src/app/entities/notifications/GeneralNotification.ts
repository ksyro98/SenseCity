export abstract class GeneralNotification {
    text: string;
    // avoid using relative path because it will be used by the component that shows the notification
    // 2 notification icons must exist, 1 for read and 1 for unread notifications
    // the name for the unread should be: <name_of_read>_grey.svg
    imageSrc: string;
    read: boolean;
    type: string;

    protected constructor(text: string, imageSrc: string, read: boolean, type: string) {
        this.text = text;
        this.imageSrc = '/assets/svg-images/notifications/' + imageSrc + (read ? '_grey' : '') + '.svg';
        this.read = read;
        this.type = type;
    }

    getReadNotification(){
        if (this.read){
            return this;
        }
        this.read = true;
        this.imageSrc = this.imageSrc.replace('.svg', '_grey.svg');
        return this;
    }
}
