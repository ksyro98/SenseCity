import {ProfileElement} from '../entities/ProfileElement';

export const PROFILE_ELEMENTS: ProfileElement[] = [
    {
        label: 'Όνομα',
        value: '',
        inputType: 'text',
        key: 'name'
    },
    {
        label: 'Email',
        value: '',
        inputType: 'email',
        key: 'email'
    },
    {
        label: 'Τηλέφωνο',
        value: '',
        inputType: 'tel',
        key: 'phone-number'
    },
    {
        label: 'Όνομα πατέρα',
        value: '',
        inputType: 'text',
        key: 'fathers-name'
    },
    {
        label: 'Όνομα μητέρας',
        value: '',
        inputType: 'text',
        key: 'mothers-name'
    },
    {
        label: 'ΑΔΤ',
        value: '',
        inputType: 'text',
        key: 'id-number'
    },
    {
        label: 'ΑΦΜ',
        value: '',
        inputType: 'number',
        key: 'tax-number'
    }
];
