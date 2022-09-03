import { Answer, TypeAnswer}  from "./Answer";
import * as Collections from 'typescript-collections'

export default class AnswerChoice implements Answer {
    private options: Set<string> = new Set<string>();

    AnswerChoice(options: Set<string>) {
        this.options = options;
    }

    type(): TypeAnswer {
        return TypeAnswer.CHOICE;
    }

    Options(): Set<string> {
        return Collections.unmodifiableSet(this.options);
    }
}