import {transformDateFormat} from '../utils/date-utils';

export class NeighborhoodMessage {
    constructor(private title: string, private msg: string, private timeSent: string) {}

    getTitle(): string {
        return this.title;
    }

    getMsg(): string {
        return this.msg;
    }

    getTimeSent(): string {
        return transformDateFormat(this.timeSent);
    }
}
