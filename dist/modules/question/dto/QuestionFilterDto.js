'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const quiz_entity_1 = require("../../quiz/quiz.entity");
class QuestionFilterDto {
    constructor(pageOptionsDto) {
        if (pageOptionsDto.quizId) {
            console.log(pageOptionsDto.quizId, 'quizId passed to filter');
            const quizEntity = new quiz_entity_1.QuizEntity();
            quizEntity.id = pageOptionsDto.quizId;
            this.quiz = quizEntity.toDto();
            this.quizId = pageOptionsDto.quizId;
        }
        if (pageOptionsDto.ispublished) {
            this.ispublished = pageOptionsDto.ispublished;
        }
    }
}
exports.QuestionFilterDto = QuestionFilterDto;
//# sourceMappingURL=QuestionFilterDto.js.map