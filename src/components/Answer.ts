export enum TypeAnswer {
    TEXT,
    CHOICE
}

export default interface Answer {
    type(): TypeAnswer;
}
