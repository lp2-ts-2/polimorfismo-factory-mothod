import { Answer } from "./Answer";

export default class AnswerText implements Answer {

 type(): TypeAnswer {
        return TypeAnswer.TEXT;
    }
}
