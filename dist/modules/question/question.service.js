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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const question_repository_1 = require("./question.repository");
const validator_service_1 = require("../../shared/services/validator.service");
const aws_s3_service_1 = require("../../shared/services/aws-s3.service");
const PageMetaDto_1 = require("../../common/dto/PageMetaDto");
const questions_page_dto_1 = require("./dto/questions-page.dto");
const QuestionFilterDto_1 = require("./dto/QuestionFilterDto");
let QuestionService = class QuestionService {
    constructor(questionRepository, validatorService, awsS3Service) {
        this.questionRepository = questionRepository;
        this.validatorService = validatorService;
        this.awsS3Service = awsS3Service;
    }
    findOne(findData) {
        return this.questionRepository.findOne(findData);
    }
    createQuestion(questionDto, quiz) {
        return __awaiter(this, void 0, void 0, function* () {
            const question = this.questionRepository.create(Object.assign(Object.assign({}, questionDto), { quiz }));
            question.ispublished = false;
            return this.questionRepository.save(question);
        });
    }
    updateQuestion(questionDto, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryBuilder = this.questionRepository.createQueryBuilder('question');
            if (questionDto.ispublished == true) {
                const questionEntity = yield this.questionRepository.findOne(id, {
                    relations: ['answers'],
                });
                const qDto = questionEntity.toDto();
                if (!qDto.answers || qDto.answers.length == 0) {
                    throw new common_1.BadRequestException({
                        message: 'error.question.puplish.answers.empty',
                    });
                }
            }
            const result = yield queryBuilder
                .update()
                .set(Object.assign({}, questionDto))
                .where('id = :id', { id: id })
                .execute();
            return result;
        });
    }
    getQuestions(pageOptionsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = new QuestionFilterDto_1.QuestionFilterDto(pageOptionsDto);
            const queryBuilder = this.questionRepository.createQueryBuilder('question');
            const [questions, questionsCount] = yield queryBuilder
                .skip(pageOptionsDto.skip)
                .take(pageOptionsDto.take)
                .where(filter)
                .getManyAndCount();
            const pageMetaDto = new PageMetaDto_1.PageMetaDto({
                pageOptionsDto,
                itemCount: questionsCount,
            });
            return new questions_page_dto_1.QuestionsPageDto(questions.toDtos(), pageMetaDto);
        });
    }
};
QuestionService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [question_repository_1.QuestionRepository,
        validator_service_1.ValidatorService,
        aws_s3_service_1.AwsS3Service])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map