export enum TypeAnswer {
    TEXT,
    CHOICE
}

export interface Answer {
    type(): TypeAnswer;
}