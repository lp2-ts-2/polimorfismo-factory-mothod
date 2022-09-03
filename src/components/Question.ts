export enum Level {
    EASY = 25, 
    MEDIUM = 50, 
    HARD = 75, 
    EXPERT = 100,
}

export class Question {
    private texto: string;
    private tags: Set<string> = new Set<string>();
    private level: Level;
    private answer: string;

    readonly score = Level;

    Score() {
        return this.score;
    }

    constructor (
        texto: string,
        tags: Set<string>,
        level: Level,
        answer: string,
    ) {
        this.texto = texto;
        this.tags = tags;
        this.level = level;
        this.answer = answer;
    }

    Texto(): string {
        return this.texto;
    }

    Tags(): Set<string> {
        return this.tags;
    }

    Levels(): number {
        return this.level;
    }

    Answer(): string {
        return this.answer;
    }
}

