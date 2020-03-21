'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const AbstractDto_1 = require("../../../common/dto/AbstractDto");
const QuizDto_1 = require("../../quiz/dto/QuizDto");
class QuestionDto extends AbstractDto_1.AbstractDto {
    constructor(question) {
        super(question);
        this.text = question.text;
        this.ispublished = question.ispublished;
        if (question.quiz) {
            this.quiz = question.quiz.toDto();
        }
        if (question.answers) {
        }
    }
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], QuestionDto.prototype, "text", void 0);
__decorate([
    swagger_1.ApiModelProperty({ default: false }),
    __metadata("design:type", Boolean)
], QuestionDto.prototype, "ispublished", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", typeof (_a = typeof QuizDto_1.QuizDto !== "undefined" && QuizDto_1.QuizDto) === "function" ? _a : Object)
], QuestionDto.prototype, "quiz", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], QuestionDto.prototype, "answers", void 0);
exports.QuestionDto = QuestionDto;
//# sourceMappingURL=QuestionDto.js.map