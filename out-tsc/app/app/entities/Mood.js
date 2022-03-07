export class Mood {
    constructor(mood) {
        this.mood = mood;
    }
    getIssue() {
        switch (this.mood) {
            case -1:
                return 'angry';
            case 0:
                return 'neutral';
            case 1:
                return 'happy';
        }
        return 'neutral';
    }
    getValueDescription() {
        switch (this.mood) {
            case -1:
                return 'Θυμωμένος';
            case 0:
                return 'Ουδετέρος';
            case 1:
                return 'Χαρούμενος';
        }
        return 'Ουδετέρος';
    }
}
Mood.ANGRY = 0;
Mood.NEUTRAL = 0;
Mood.HAPPY = 1;
//# sourceMappingURL=Mood.js.map