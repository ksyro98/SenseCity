const ICONS_PATH = '/assets/svg-images/technical-req-icons/';
export class RequestedService {
    static getCategoryForService(id) {
        switch (id) {
            case 0:
                return [
                    { id: 0, name: 'Χαλασμενος καδος' },
                    { id: 1, name: 'Ογκωδη αντικειμενα' },
                    { id: 2, name: 'Κομμενα κλαδια' },
                    { id: 3, name: 'Μπαζα' },
                    { id: 4, name: 'Καθαρισμος πλατειας' },
                    { id: 5, name: 'Μηχανοκινητη σαρωση' },
                    { id: -1, name: 'Αλλο' }
                ];
            case 1:
                return [
                    { id: 0, name: 'Καμμενος λαμπτηρας' },
                    { id: 1, name: 'Λαμπτηρας που αναβοσβηνει' },
                    { id: 2, name: 'Επεκταση δημοτικου φωτισμου' },
                    { id: 3, name: 'Τοποθετηση φωτιστικου σωματος' },
                    { id: -1, name: 'Αλλο' }
                ];
            case 2:
                return [
                    { id: 0, name: 'Λακουβα' },
                    { id: 1, name: 'Καταπατησεις κοινοχρ. χωρων' },
                    { id: 2, name: 'Σπασμενες πλακες πεζοδρομιου' },
                    { id: 3, name: 'Εγκαταλ. αυτοκινητο' },
                    { id: 4, name: 'Καταληψη πεζοδρομιου' },
                    { id: 5, name: 'Σπασμενο παγκακι' },
                    { id: 6, name: 'Κακοτεχνια' },
                    { id: -1, name: 'Αλλο' }
                ];
            case 3:
                return [
                    { id: 0, name: 'Θεομηνια' },
                    { id: 1, name: 'Ακαθαριστο ιδιωτικο οικοπεδο' },
                    { id: -1, name: 'Αλλο' }
                ];
            case 4:
                return [
                    { id: 0, name: 'Κοπη χορτων' },
                    { id: 1, name: 'Κλαδεμα δεντρων' },
                    { id: 2, name: 'Ακαθαριστο δημοτικο οικοπεδο' },
                    { id: -1, name: 'Αλλο' }
                ];
            case 5:
                return [
                    { id: 0, name: 'Ανακυκλωση' },
                    { id: 1, name: 'Μυοκτονιες' },
                    { id: 2, name: 'Εντομοκτονια' },
                    { id: -1, name: 'Αλλο' }
                ];
            case 6:
                return [
                    { id: 0, name: 'Βουλωμενο φρεατιο' },
                    { id: 1, name: 'Σπασμενο καπακι φρεατιου' },
                    { id: 2, name: 'Διαρροη νερου' },
                    { id: -1, name: 'Αλλο' }
                ];
        }
        return [];
    }
}
export const TECHNICAL_SERVICES_LIST = [
    {
        id: 0,
        name: 'Καθαριοτητα',
        icon: ICONS_PATH + 'cleaning.svg'
    },
    {
        id: 1,
        name: 'Ηλεκτροφωτισμος',
        icon: ICONS_PATH + 'electricity.svg'
    },
    {
        id: 2,
        name: 'Πεζοδρομιο/Δρομος/Πλατεια',
        icon: ICONS_PATH + 'streets.svg'
    },
    {
        id: 3,
        name: 'Πολιτικη Προστασια',
        icon: ICONS_PATH + 'civil-protection.svg'
    },
    {
        id: 4,
        name: 'Πρασινο',
        icon: ICONS_PATH + 'green.svg'
    },
    {
        id: 5,
        name: 'Περιβαλλοντικα Θεματα',
        icon: ICONS_PATH + 'environment.svg'
    },
    {
        id: 6,
        name: 'Υδρευση/Αποχετευση',
        icon: ICONS_PATH + 'water.svg'
    }
];
export const ADMINISTRATIVE_SERVICES_LIST = [
    {
        id: 0,
        name: 'Dolor assumenda',
        icon: ''
    },
    {
        id: 1,
        name: 'Et quos',
        icon: ''
    },
    {
        id: 2,
        name: 'Est expedita',
        icon: ''
    },
    {
        id: 3,
        name: 'Corporis',
        icon: ''
    },
    {
        id: 4,
        name: 'Voluptatum voluptatem',
        icon: ''
    },
    {
        id: 5,
        name: 'Dolorem maiores',
        icon: ''
    },
    {
        id: 6,
        name: 'Explicabo provident',
        icon: ''
    },
    {
        id: 7,
        name: 'Eius ut ratione',
        icon: ''
    },
    {
        id: 8,
        name: 'Sunt',
        icon: ''
    },
    {
        id: 9,
        name: 'Voluptas iure',
        icon: ''
    },
    {
        id: 10,
        name: 'Nostrum laboriosam',
        icon: ''
    }
];
//# sourceMappingURL=RequestedService.js.map