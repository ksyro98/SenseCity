import {element} from 'protractor';
import {SubService} from './SubService';
import {OtherCategory} from './OtherCategory';

const ICONS_PATH = '/assets/svg-images/technical-req-icons/';

export class Service {
    id: number;
    name: string;
    icon: string;   // check how the icon will be stored; empty string for administrative services
    translationKey: string;

    static getSubService(id: number): SubService[]{
        switch (id){
            case 0:
                return [
                    {id: 0, name: 'Χαλασμενος καδος', translationKey: 'damaged-bucket'},
                    {id: 1, name: 'Ογκωδη αντικειμενα', translationKey: 'bulky-items'},
                    {id: 2, name: 'Κομμενα κλαδια', translationKey: 'cut-branches'},
                    {id: 3, name: 'Μπαζα', translationKey: 'debris'},
                    {id: 4, name: 'Καθαρισμος πλατειας', translationKey: 'square-cleaning'},
                    {id: 5, name: 'Μηχανοκινητη σαρωση', translationKey: 'motorized-scanning'},
                    {id: -1, name: 'Αλλο', translationKey: 'other'}
                ];
            case 1:
                return [
                    {id: 0, name: 'Καμμενος λαμπτηρας', translationKey: 'burnt-lamp'},
                    {id: 1, name: 'Λαμπτηρας που αναβοσβηνει', translationKey: 'flashing-lamp'},
                    {id: 2, name: 'Επεκταση δημοτικου φωτισμου', translationKey: 'expansion-of-municipal-lighting'},
                    {id: 3, name: 'Τοποθετηση φωτιστικου σωματος', translationKey: 'installation-of-luminaire'},
                    {id: -1, name: 'Αλλο', translationKey: 'other'}
                ];
            case 2:
                return [
                    {id: 0, name: 'Λακουβα', translationKey: 'pond'},
                    {id: 1, name: 'Καταπατησεις κοινοχρ. χωρων', translationKey: 'violations-of-common-areas'},
                    {id: 2, name: 'Σπασμενες πλακες πεζοδρομιου', translationKey: 'broken-pavement-slabs'},
                    {id: 3, name: 'Εγκαταλ. αυτοκινητο', translationKey: 'abandoned-car'},
                    {id: 4, name: 'Καταληψη πεζοδρομιου', translationKey: 'pavement-occupation'},
                    {id: 5, name: 'Σπασμενο παγκακι', translationKey: 'broken-bench'},
                    {id: 6, name: 'Κακοτεχνια', translationKey: 'botchery'},
                    {id: -1, name: 'Αλλο', translationKey: 'other'}
                ];
            case 3:
                return [
                    {id: 0, name: 'Θεομηνια', translationKey: 'catastrophe'},
                    {id: 1, name: 'Ακαθαριστο ιδιωτικο οικοπεδο', translationKey: 'gross-private-plot'},
                    {id: -1, name: 'Αλλο', translationKey: 'other'}
                ];
            case 4:
                return [
                    {id: 0, name: 'Κοπη χορτων', translationKey: 'mowing-grass'},
                    {id: 1, name: 'Κλαδεμα δεντρων', translationKey: 'tree-pruning'},
                    {id: 2, name: 'Ακαθαριστο δημοτικο οικοπεδο', translationKey: 'gross-municipal-plot'},
                    {id: -1, name: 'Αλλο', translationKey: 'other'}
                ];
            case 5:
                return [
                    {id: 0, name: 'Ανακυκλωση', translationKey: 'recycling'},
                    {id: 1, name: 'Μυοκτονιες', translationKey: 'rodenticide'},
                    {id: 2, name: 'Εντομοκτονια', translationKey: 'insecticide'},
                    {id: -1, name: 'Αλλο', translationKey: 'other'}
                ];
            case 6:
                return [
                    {id: 0, name: 'Βουλωμενο φρεατιο', translationKey: 'clogged-well'},
                    {id: 1, name: 'Σπασμενο καπακι φρεατιου', translationKey: 'broken-manhole-cover'},
                    {id: 2, name: 'Διαρροη νερου', translationKey: 'water-leak'},
                    {id: -1, name: 'Αλλο', translationKey: 'other'}
                ];
        }

        return [];
    }

}

export const TECHNICAL_SERVICES_LIST = [
    {
        id: 0,
        name: 'Καθαριότητα',
        icon: ICONS_PATH + 'cleaning.svg',
        translationKey: 'garbage'
    },
    {
        id: 1,
        name: 'Ηλεκτροφωτισμός',
        icon: ICONS_PATH + 'electricity.svg',
        translationKey: 'lighting'
    },
    {
        id: 2,
        name: 'Πεζοδρόμιο/Δρόμος/Πλατειά',
        icon: ICONS_PATH + 'streets.svg',
        translationKey: 'road-constructor'
    },
    {
        id: 3,
        name: 'Πολιτική Προστασία',
        icon: ICONS_PATH + 'civil-protection.svg',
        translationKey: 'protection-policy'
    },
    {
        id: 4,
        name: 'Πράσινο',
        icon: ICONS_PATH + 'green.svg',
        translationKey: 'green'
    },
    {
        id: 5,
        name: 'Περιβαλλοντικά Θέματα',
        icon: ICONS_PATH + 'environment.svg',
        translationKey: 'environment'
    },
    {
        id: 6,
        name: 'Ύδρευση/Αποχέτευση',
        icon: ICONS_PATH + 'water.svg',
        translationKey: 'plumbing'
    }
];

export const ADMINISTRATIVE_SERVICES_LIST = [
    {
        id: 0,
        name: 'Dolor assumenda',
        icon: '',
        translationKey: '_placeholder'
    },
    {
        id: 1,
        name: 'Et quos',
        icon: '',
        translationKey: '_placeholder'
    },
    {
        id: 2,
        name: 'Est expedita',
        icon: '',
        translationKey: '_placeholder'
    },
    {
        id: 3,
        name: 'Corporis',
        icon: '',
        translationKey: '_placeholder'
    },
    {
        id: 4,
        name: 'Voluptatum voluptatem',
        icon: '',
        translationKey: '_placeholder'
    },
    {
        id: 5,
        name: 'Dolorem maiores',
        icon: '',
        translationKey: '_placeholder'
    },
    {
        id: 6,
        name: 'Explicabo provident',
        icon: '',
        translationKey: '_placeholder'
    },
    {
        id: 7,
        name: 'Eius ut ratione',
        icon: '',
        translationKey: '_placeholder'
    },
    {
        id: 8,
        name: 'Sunt',
        icon: '',
        translationKey: '_placeholder'
    },
    {
        id: 9,
        name: 'Voluptas iure',
        icon: '',
        translationKey: '_placeholder'
    },
    {
        id: 10,
        name: 'Nostrum laboriosam',
        icon: '',
        translationKey: '_placeholder'
    }
];


