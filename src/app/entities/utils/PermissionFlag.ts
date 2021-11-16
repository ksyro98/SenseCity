export class PermissionFlag {
    permitted: boolean;
    reason: string;

    constructor(permitted: boolean, reason: string) {
        this.permitted = permitted;
        this.reason = reason;
    }
}
