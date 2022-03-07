export class Mood {
    static readonly ANGRY = 0;
    static readonly NEUTRAL = 0;
    static readonly HAPPY = 1;

    private readonly mood: number;

    constructor(mood: number) {
        this.mood = mood;
    }

    getIssue(): string{
        switch (this.mood){
            case -1:
                return 'angry';
            case 0:
                return 'neutral';
            case 1:
                return 'happy';
        }
        return 'neutral';
    }

    getValueDescription(): string{
        switch (this.mood){
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
