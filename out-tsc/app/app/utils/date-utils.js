export function mapMonth(monthNum) {
    switch (monthNum) {
        case 0: return { name: 'Γεν.', translationKey: 'month-1' };
        case 1: return { name: 'Φεβ.', translationKey: 'month-2' };
        case 2: return { name: 'Μαρ.', translationKey: 'month-3' };
        case 3: return { name: 'Απρ.', translationKey: 'month-4' };
        case 4: return { name: 'Μαι.', translationKey: 'month-5' };
        case 5: return { name: 'Ιουν.', translationKey: 'month-6' };
        case 6: return { name: 'Ιουλ.', translationKey: 'month-7' };
        case 7: return { name: 'Αυγ.', translationKey: 'month-8' };
        case 8: return { name: 'Σεπ.', translationKey: 'month-9' };
        case 9: return { name: 'Οκτ.', translationKey: 'month-10' };
        case 10: return { name: 'Νοε.', translationKey: 'month-11' };
        case 11: return { name: 'Δεκ.', translationKey: 'month-12' };
        default: return { name: 'Γεν.', translationKey: 'month-1' };
    }
}
export function getDayText(day) {
    switch (day) {
        case 'Mon': return { name: 'Δευτέρα', translationKey: 'day-1' };
        case 'Tue': return { name: 'Τρίτη', translationKey: 'day-2' };
        case 'Wed': return { name: 'Τετάρτη', translationKey: 'day-3' };
        case 'Thu': return { name: 'Πέμπτη', translationKey: 'day-4' };
        case 'Fri': return { name: 'Παρασκευή', translationKey: 'day-5' };
        case 'Sat': return { name: 'Σάββατο', translationKey: 'day-6' };
        case 'Sun': return { name: 'Κυριακή', translationKey: 'day-7' };
        default: return { name: 'Δευτέρα', translationKey: 'day-1' };
    }
}
export function getMonthText(month) {
    switch (month) {
        case 'Jan': return { name: 'Γεν.', translationKey: 'month-1' };
        case 'Feb': return { name: 'Φεβ.', translationKey: 'month-2' };
        case 'Mar': return { name: 'Μαρ.', translationKey: 'month-3' };
        case 'Apr': return { name: 'Απρ.', translationKey: 'month-4' };
        case 'May': return { name: 'Μαι.', translationKey: 'month-5' };
        case 'Jun': return { name: 'Ιουν.', translationKey: 'month-6' };
        case 'Jul': return { name: 'Ιουλ.', translationKey: 'month-7' };
        case 'Aug': return { name: 'Αυγ.', translationKey: 'month-8' };
        case 'Sep': return { name: 'Σεπ.', translationKey: 'month-9' };
        case 'Oct': return { name: 'Οκτ.', translationKey: 'month-10' };
        case 'Nov': return { name: 'Νοε.', translationKey: 'month-11' };
        case 'Dec': return { name: 'Δεκ.', translationKey: 'month-12' };
        default: return { name: 'Γεν.', translationKey: 'month-1' };
    }
}
//# sourceMappingURL=date-utils.js.map