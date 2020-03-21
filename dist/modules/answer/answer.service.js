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
const answer_repository_1 = require("./answer.repository");
const validator_service_1 = require("../../shared/services/validator.service");
const aws_s3_service_1 = require("../../shared/services/aws-s3.service");
const PageMetaDto_1 = require("../../common/dto/PageMetaDto");
const answers_page_dto_1 = require("./dto/answers-page.dto");
const AnswerFilterDto_1 = require("./dto/AnswerFilterDto");
let AnswerService = class AnswerService {
    constructor(answerRepository, validatorService, awsS3Service) {
        this.answerRepository = answerRepository;
        this.validatorService = validatorService;
        this.awsS3Service = awsS3Service;
    }
    findOne(findData) {
        return this.answerRepository.findOne(findData);
    }
    createAnswer(answerDto, question) {
        return __awaiter(this, void 0, void 0, function* () {
            const answer = this.answerRepository.create(Object.assign(Object.assign({}, answerDto), { question }));
            return this.answerRepository.save(answer);
        });
    }
    updateAnswer(answerDto, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const answer = yield this.answerRepository.update({ id }, answerDto);
            return answer;
        });
    }
    getAnswers(pageOptionsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = new AnswerFilterDto_1.AnswerFilterDto(pageOptionsDto);
            const queryBuilder = this.answerRepository.createQueryBuilder('answer');
            const [answers, answersCount] = yield queryBuilder
                .skip(pageOptionsDto.skip)
                .take(pageOptionsDto.take)
                .where(filter)
                .getManyAndCount();
            const pageMetaDto = new PageMetaDto_1.PageMetaDto({
                pageOptionsDto,
                itemCount: answersCount,
            });
            return new answers_page_dto_1.AnswersPageDto(answers.toDtos(), pageMetaDto);
        });
    }
};
AnswerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [answer_repository_1.AnswerRepository,
        validator_service_1.ValidatorService,
        aws_s3_service_1.AwsS3Service])
], AnswerService);
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map