export class User{
    fullName: string;
    email: string;
    phone: string;
    fathersName: string;
    mothersName: string;
    idNumber: string;
    afm: string;

    constructor(
        fullName?: string, email?: string, phone?: string, fathersName?: string, mothersName?: string, idNumber?: string, afm?: string
    ) {
        this.fullName = fullName ? fullName : '';
        this.email = email ? email : '';
        this.phone = phone ? phone : '';
        this.fathersName = fathersName ? fathersName : '';
        this.mothersName = mothersName ? mothersName : '';
        this.idNumber = idNumber ? idNumber : '';
        this.afm = afm ? afm : '';
    }

    setValue(key: string, value: string){
        switch (key) {
            case 'name':
                this.fullName = value;
                break;
            case 'email':
                this.email = value;
                break;
            case 'phone-number':
                this.phone = value;
                break;
            case 'fathers-name':
                this.fathersName = value;
                break;
            case 'mothers-name':
                this.mothersName = value;
                break;
            case 'id-number':
                this.idNumber = value;
                return;
            case 'tax-number':
                this.afm = value;
                return;
        }
    }
}
