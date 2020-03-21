"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../common/abstract.entity");
const QuestionDto_1 = require("./dto/QuestionDto");
const quiz_entity_1 = require("../quiz/quiz.entity");
const answer_entity_1 = require("../answer/answer.entity");
let QuestionEntity = class QuestionEntity extends abstract_entity_1.AbstractEntity {
    constructor() {
        super(...arguments);
        this.dtoClass = QuestionDto_1.QuestionDto;
    }
};
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], QuestionEntity.prototype, "text", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, default: false }),
    __metadata("design:type", Boolean)
], QuestionEntity.prototype, "ispublished", void 0);
__decorate([
    typeorm_1.ManyToOne(type => quiz_entity_1.QuizEntity, quiz => quiz.questions),
    __metadata("design:type", quiz_entity_1.QuizEntity)
], QuestionEntity.prototype, "quiz", void 0);
__decorate([
    typeorm_1.OneToMany(type => answer_entity_1.AnswerEntity, answer => answer.question),
    __metadata("design:type", Array)
], QuestionEntity.prototype, "answers", void 0);
QuestionEntity = __decorate([
    typeorm_1.Entity({ name: 'questions' }),
    typeorm_1.Index(['text', 'quiz'], { unique: true })
], QuestionEntity);
exports.QuestionEntity = QuestionEntity;
//# sourceMappingURL=question.entity.js.map