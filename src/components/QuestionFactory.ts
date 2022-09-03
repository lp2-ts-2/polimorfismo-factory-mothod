import { Question } from "./Question"
import { Level } from "./Question";

export default interface {
    Question(texto: string, tags: Set<string>, level: Level): Question {
        return new Question(texto, tags, level, new AnswerText());
    }

    Question(texto: string, tags: Set<string>, level: Level): Question {
        return new Question(texto, tags, level, new AnswerText());
    }
}