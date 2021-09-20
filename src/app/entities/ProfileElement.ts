import {User} from './User';

export class ProfileElement{

    static readonly NAME_KEY = 'name';
    static readonly EMAIL_KEY = 'email';
    static readonly PHONE_KEY = 'phone-number';
    static readonly FATHERS_NAME_KEY = 'fathers-name';
    static readonly MOTHERS_NAME_KEY = 'mothers-name';
    static readonly ID_NUMBER_KEY = 'id-number';
    static readonly TAX_NUMBER_KEY = 'tax-number';

    label: string;
    value: string;
    inputType: string;
    key: string;

    static getProfileElementsFromUser(user: User){
        return [
            {
                label: 'Όνομα',
                value: user.fullName,
                inputType: 'text',
                key: this.NAME_KEY
            },
            {
                label: 'Email',
                value: user.email,
                inputType: 'email',
                key: this.EMAIL_KEY
            },
            {
                label: 'Τηλέφωνο',
                value: user.phone,
                inputType: 'tel',
                key: this.PHONE_KEY
            },
            {
                label: 'Όνομα πατέρα',
                value: user.fathersName,
                inputType: 'text',
                key: this.FATHERS_NAME_KEY
            },
            {
                label: 'Όνομα μητέρας',
                value: user.mothersName,
                inputType: 'text',
                key: this.MOTHERS_NAME_KEY
            },
            {
                label: 'ΑΔΤ',
                value: user.idNumber,
                inputType: 'text',
                key: this.ID_NUMBER_KEY
            },
            {
                label: 'ΑΦΜ',
                value: user.afm,
                inputType: 'number',
                key: this.TAX_NUMBER_KEY
            }
        ];
    }
}
