export function getShortString(initialString, maxLength) {
    if (initialString === '') {
        return '-';
    }
    else if (initialString.length <= maxLength) {
        return initialString;
    }
    else {
        return initialString.substring(0, maxLength - 3) + '...';
    }
}
//# sourceMappingURL=string-utils.js.map