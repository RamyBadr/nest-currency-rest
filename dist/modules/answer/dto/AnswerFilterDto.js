'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const question_entity_1 = require("../../question/question.entity");
class AnswerFilterDto {
    constructor(pageOptionsDto) {
        if (pageOptionsDto.questionId) {
            const questionEntity = new question_entity_1.QuestionEntity();
            questionEntity.id = pageOptionsDto.questionId;
            this.question = questionEntity.toDto();
            this.questionId = pageOptionsDto.questionId;
        }
        if (pageOptionsDto.iscorrect) {
            this.iscorrect = pageOptionsDto.iscorrect;
        }
    }
}
exports.AnswerFilterDto = AnswerFilterDto;
//# sourceMappingURL=AnswerFilterDto.js.map