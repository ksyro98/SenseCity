export function getShortString(initialString: string, maxLength: number): string {
    if (initialString === ''){
        return '-';
    }
    else if (initialString.length <= maxLength){
        return initialString;
    }
    else{
        return initialString.substring(0, maxLength - 3) + '...';
    }
}
