import { Result } from "./result";

export class Results {
    results: Result[];

    constructor(results: Result[]) {
        this.results = results;
    }

    public get averageScored(): number {
        return Math.round(this.results.map((r => r.scored)).reduce( ( p: number, c: number ) => p + c, 0 ) / this.results.length);
    }

    public get averageConceded(): number {
        return Math.round(this.results.map((r => r.conceded)).reduce( ( p: number, c: number ) => p + c, 0 ) / this.results.length);
    }
}