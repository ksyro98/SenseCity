export class ProfileElement {
    static getProfileElementsFromUser(user) {
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
ProfileElement.NAME_KEY = 'name';
ProfileElement.EMAIL_KEY = 'email';
ProfileElement.PHONE_KEY = 'phone-number';
ProfileElement.FATHERS_NAME_KEY = 'fathers-name';
ProfileElement.MOTHERS_NAME_KEY = 'mothers-name';
ProfileElement.ID_NUMBER_KEY = 'id-number';
ProfileElement.TAX_NUMBER_KEY = 'tax-number';
//# sourceMappingURL=ProfileElement.js.map