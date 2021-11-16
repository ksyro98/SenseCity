import {element} from 'protractor';
import {SubService} from './SubService';
import {OtherCategory} from './OtherCategory';

const ICONS_PATH = '/assets/svg-images/technical-req-icons/';

export class Service {
    id: number;
    name: string;
    icon: string;   // check how the icon will be stored; empty string for administrative services
    translationKey: string;

    static getSubServices(id: number): SubService[]{
        switch (id){
            case 0:
                return [
                    {id: 0, name: 'Χαλασμένος κάδος', translationKey: 'damaged-bucket'},
                    {id: 1, name: 'Ογκώδη αντικείμενα', translationKey: 'bulky-items'},
                    {id: 2, name: 'Κομμένα κλαδιά', translationKey: 'cut-branches'},
                    {id: 3, name: 'Μπάζα', translationKey: 'debris'},
                    {id: 4, name: 'Καθαρισμός πλατείας', translationKey: 'square-cleaning'},
                    {id: 5, name: 'Μηχανοκίνητη σάρωση', translationKey: 'motorized-scanning'},
                    {id: -1, name: 'Άλλο', translationKey: 'other'}
                ];
            case 1:
                return [
                    {id: 0, name: 'Καμμένος λαμπτήρας', translationKey: 'burnt-lamp'},
                    {id: 1, name: 'Λαμπτήρας που αναβοσβήνει', translationKey: 'flashing-lamp'},
                    {id: 2, name: 'Επέκταση δημοτικού φωτισμού', translationKey: 'expansion-of-municipal-lighting'},
                    {id: 3, name: 'Τοποθέτηση φωτιστικού σώματος', translationKey: 'installation-of-luminaire'},
                    {id: -1, name: 'Άλλο', translationKey: 'other'}
                ];
            case 2:
                return [
                    {id: 0, name: 'Λακούβα', translationKey: 'pond'},
                    {id: 1, name: 'Καταπατήσεις κοινόχρ. χώρων', translationKey: 'violations-of-common-areas'},
                    {id: 2, name: 'Σπασμένες πλάκες πεζοδρομίου', translationKey: 'broken-pavement-slabs'},
                    {id: 3, name: 'Εγκαταλ. αυτοκίνητο', translationKey: 'abandoned-car'},
                    {id: 4, name: 'Κατάληψη πεζοδρομίου', translationKey: 'pavement-occupation'},
                    {id: 5, name: 'Σπασμένο παγκάκι', translationKey: 'broken-bench'},
                    {id: 6, name: 'Κακοτεχνία', translationKey: 'botchery'},
                    {id: -1, name: 'Άλλο', translationKey: 'other'}
                ];
            case 3:
                return [
                    {id: 0, name: 'Θεομηνία', translationKey: 'catastrophe'},
                    {id: 1, name: 'Ακαθάριστο ιδιώτικο οικόπεδο', translationKey: 'gross-private-plot'},
                    {id: -1, name: 'Άλλο', translationKey: 'other'}
                ];
            case 4:
                return [
                    {id: 0, name: 'Κοπή χόρτων', translationKey: 'mowing-grass'},
                    {id: 1, name: 'Κλάδεμα δέντρων', translationKey: 'tree-pruning'},
                    {id: 2, name: 'Ακαθάριστο δημοτικό οικόπεδο', translationKey: 'gross-municipal-plot'},
                    {id: -1, name: 'Άλλο', translationKey: 'other'}
                ];
            case 5:
                return [
                    {id: 0, name: 'Ανακύκλωση', translationKey: 'recycling'},
                    {id: 1, name: 'Μυοκτονία', translationKey: 'rodenticide'},
                    {id: 2, name: 'Εντομοκτονία', translationKey: 'insecticide'},
                    {id: -1, name: 'Άλλο', translationKey: 'other'}
                ];
            case 6:
                return [
                    {id: 0, name: 'Βουλωμένο φρεάτιο', translationKey: 'clogged-well'},
                    {id: 1, name: 'Σπασμένο καπάκι φρεατίου', translationKey: 'broken-manhole-cover'},
                    {id: 2, name: 'Διαρροή νερού', translationKey: 'water-leak'},
                    {id: -1, name: 'Άλλο', translationKey: 'other'}
                ];
        }

        return [];
    }

    static getTechnicalServiceFromKey(key: string): Service{
        return TECHNICAL_SERVICES_LIST.filter((e) => e.translationKey === key)[0];
    }

    static getSubService(serviceKey: string, subServiceName: string): SubService{
        let id = 0;
        switch (serviceKey){
            case 'garbage':
                id = 0;
                break;
            case 'lighting':
                id = 1;
                break;
            case 'road-constructor':
                id = 2;
                break;
            case 'protection-policy':
                id = 3;
                break;
            case 'green':
                id = 4;
                break;
            case 'environment':
                id = 5;
                break;
            case 'plumbing':
                id = 6;
                break;
        }

        const subServices = this.getSubServices(id).filter((e) => e.name === subServiceName);

        return subServices.length !== 0 ? subServices[0] : {id: -1, name: 'Αλλο', translationKey: 'other'};
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


