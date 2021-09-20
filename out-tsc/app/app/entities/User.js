export class User {
    constructor(fullName, email, phone, fathersName, mothersName, idNumber, afm) {
        this.fullName = fullName ? fullName : '';
        this.email = email ? email : '';
        this.phone = phone ? phone : '';
        this.fathersName = fathersName ? fathersName : '';
        this.mothersName = mothersName ? mothersName : '';
        this.idNumber = idNumber ? idNumber : '';
        this.afm = afm ? afm : '';
    }
    setValue(key, value) {
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
//# sourceMappingURL=User.js.map