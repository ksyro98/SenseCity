export function mapMonth(monthNum: number): { name: string; translationKey: string; }{
    switch (monthNum){
        case 0: return {name: 'Γεν.', translationKey: 'month-1'};
        case 1: return {name: 'Φεβ.', translationKey: 'month-2'};
        case 2: return {name: 'Μαρ.', translationKey: 'month-3'};
        case 3: return {name: 'Απρ.', translationKey: 'month-4'};
        case 4: return {name: 'Μαι.', translationKey: 'month-5'};
        case 5: return {name: 'Ιουν.', translationKey: 'month-6'};
        case 6: return {name: 'Ιουλ.', translationKey: 'month-7'};
        case 7: return {name: 'Αυγ.', translationKey: 'month-8'};
        case 8: return {name: 'Σεπ.', translationKey: 'month-9'};
        case 9: return {name: 'Οκτ.', translationKey: 'month-10'};
        case 10: return {name: 'Νοε.', translationKey: 'month-11'};
        case 11: return {name: 'Δεκ.', translationKey: 'month-12'};
    }
    return {name: 'Γεν.', translationKey: 'month-1'};
}
