export class Result {
    scored: number;
    conceded: number;

    constructor(scored: number, conceded: number) {
        this.scored = scored;
        this.conceded = conceded;
    }

    public get wasWon(): boolean {
        return this.scored > this.conceded;
    }
}