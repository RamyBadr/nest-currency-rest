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
const QuizDto_1 = require("./dto/QuizDto");
const user_entity_1 = require("../user/user.entity");
const question_entity_1 = require("../question/question.entity");
let QuizEntity = class QuizEntity extends abstract_entity_1.AbstractEntity {
    constructor() {
        super(...arguments);
        this.dtoClass = QuizDto_1.QuizDto;
    }
    toDto() {
        return super.toDto();
    }
};
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], QuizEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, default: false }),
    __metadata("design:type", Boolean)
], QuizEntity.prototype, "ispublished", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.quizes),
    __metadata("design:type", user_entity_1.UserEntity)
], QuizEntity.prototype, "author", void 0);
__decorate([
    typeorm_1.OneToMany(type => question_entity_1.QuestionEntity, question => question.quiz),
    __metadata("design:type", Array)
], QuizEntity.prototype, "questions", void 0);
QuizEntity = __decorate([
    typeorm_1.Entity({ name: 'quizes' }),
    typeorm_1.Index(['title', 'author'], { unique: true })
], QuizEntity);
exports.QuizEntity = QuizEntity;
//# sourceMappingURL=quiz.entity.js.map