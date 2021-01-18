import {element} from 'protractor';
import {Category} from './Category';
import {OtherCategory} from './OtherCategory';

export class RequestedService{
    id: number;
    name: string;
    icon: string;   // check how the icon will be stored; empty string for administrative services

    static getCategoryForService(id: number): Category[]{
        switch (id){
            case 0:
                return [
                    {id: 0, name: 'Χαλασμενος καδος'},
                    {id: 1, name: 'Ογκωδη αντικειμενα'},
                    {id: 2, name: 'Κομμενα κλαδια'},
                    {id: 3, name: 'Μπαζα'},
                    {id: 4, name: 'Καθαρισμος πλατειας'},
                    {id: 5, name: 'Μηχανοκινητη σαρωση'},
                    {id: -1, name: 'Αλλο'}
                ];
            case 1:
                return [
                    {id: 0, name: 'Καμμενος λαμπτηρας'},
                    {id: 1, name: 'Λαμπτηρας που αναβοσβηνει'},
                    {id: 2, name: 'Επεκταση δημοτικου φωτισμου'},
                    {id: 3, name: 'Τοποθετηση φωτιστικου σωματος'},
                    {id: -1, name: 'Αλλο'}
                ];
            case 2:
                return [
                    {id: 0, name: 'Λακουβα'},
                    {id: 1, name: 'Καταπατησεις κοινοχρ. χωρων'},
                    {id: 2, name: 'Σπασμενες πλακες πεζοδρομιου'},
                    {id: 3, name: 'Εγκαταλ. αυτοκινητο'},
                    {id: 4, name: 'Καταληψη πεζοδρομιου'},
                    {id: 5, name: 'Σπασμενο παγκακι'},
                    {id: 6, name: 'Κακοτεχνια'},
                    {id: -1, name: 'Αλλο'}
                ];
            case 3:
                return [
                    {id: 0, name: 'Θεομηνια'},
                    {id: 1, name: 'Ακαθαριστο ιδιωτικο οικοπεδο'},
                    {id: -1, name: 'Αλλο'}
                ];
            case 4:
                return [
                    {id: 0, name: 'Κοπη χορτων'},
                    {id: 1, name: 'Κλαδεμα δεντρων'},
                    {id: 2, name: 'Ακαθαριστο δημοτικο οικοπεδο'},
                    {id: -1, name: 'Αλλο'}
                ];
            case 5:
                return [
                    {id: 0, name: 'Ανακυκλωση'},
                    {id: 1, name: 'Μυοκτονιες'},
                    {id: 2, name: 'Εντομοκτονια'},
                    {id: -1, name: 'Αλλο'}
                ];
            case 6:
                return [
                    {id: 0, name: 'Βουλωμενο φρεατιο'},
                    {id: 1, name: 'Σπασμενο καπακι φρεατιου'},
                    {id: 2, name: 'Διαρροη νερου'},
                    {id: -1, name: 'Αλλο'}
                ];
        }

        return [];
    }

}

export const TECHNICAL_SERVICES_LIST = [
    {
        id: 0,
        name: 'Καθαριοτητα',
        icon: 'ellipse'
    },
    {
        id: 1,
        name: 'Ηλεκτροφωτισμος',
        icon: 'ellipse'
    },
    {
        id: 2,
        name: 'Πεζοδρομιο/Δρομος/Πλατεια',
        icon: 'ellipse'
    },
    {
        id: 3,
        name: 'Πολιτικη Προστασια',
        icon: 'ellipse'
    },
    {
        id: 4,
        name: 'Πρασινο',
        icon: 'ellipse'
    },
    {
        id: 5,
        name: 'Περιβαλλοντικα Θεματα',
        icon: 'ellipse'
    },
    {
        id: 6,
        name: 'Υδρευση/Αποχετευση',
        icon: 'ellipse'
    }
];

export const ADMINISTRATIVE_SERVICES_LIST = [
    {
        id: 0,
        name: 'Πιστοποιητικο γεννησεως',
        icon: ''
    },
    {
        id: 1,
        name: 'Πιστοποιητικο οικογενειακης καταστασης',
        icon: ''
    },
    {
        id: 2,
        name: 'Εξουσιοδοτηση',
        icon: ''
    },
];


