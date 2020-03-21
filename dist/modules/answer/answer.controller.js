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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const swagger_1 = require("@nestjs/swagger");
const role_type_1 = require("../../common/constants/role-type");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const auth_guard_1 = require("../../guards/auth.guard");
const roles_guard_1 = require("../../guards/roles.guard");
const answers_page_options_dto_1 = require("./dto/answers-page-options.dto");
const answers_page_dto_1 = require("./dto/answers-page.dto");
const answer_service_1 = require("./answer.service");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const AnswerDto_1 = require("./dto/AnswerDto");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../user/user.entity");
const AnswerCreateDto_1 = require("./dto/AnswerCreateDto");
const AnswerUpdateDto_1 = require("./dto/AnswerUpdateDto");
const question_entity_1 = require("../question/question.entity");
let AnswerController = class AnswerController {
    constructor(answerService) {
        this.answerService = answerService;
    }
    createAnswer(answerDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const question = new question_entity_1.QuestionEntity();
            question.id = answerDto.questionId;
            delete answerDto.questionId;
            const createdAnswer = yield this.answerService.createAnswer(Object.assign({}, answerDto), question);
            return createdAnswer.toDto();
        });
    }
    updateOne(updateAnswerParam, answerDto, user) {
        const result = this.answerService.updateAnswer(answerDto, updateAnswerParam.id);
        return result;
    }
    getAnswers(pageOptionsDto, user) {
        if (user.role == role_type_1.RoleType.Teacher) {
        }
        else {
            pageOptionsDto.iscorrect = true;
        }
        return this.answerService.getAnswers(pageOptionsDto);
    }
};
__decorate([
    common_1.Post(''),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    roles_decorator_1.Roles(role_type_1.RoleType.Teacher),
    common_1.UseInterceptors(auth_user_interceptor_service_1.AuthUserInterceptor),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOkResponse({ type: AnswerDto_1.AnswerDto, description: 'Successfully created' }),
    __param(0, common_1.Body()),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AnswerCreateDto_1.AnswerCreateDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "createAnswer", null);
__decorate([
    common_1.Patch(':id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    roles_decorator_1.Roles(role_type_1.RoleType.Teacher),
    common_1.UseInterceptors(auth_user_interceptor_service_1.AuthUserInterceptor),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __param(2, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AnswerUpdateDto_1.AnswerUpdateParamsDto,
        AnswerUpdateDto_1.AnswerUpdateDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Object)
], AnswerController.prototype, "updateOne", null);
__decorate([
    common_1.Get('answers'),
    roles_decorator_1.Roles(role_type_1.RoleType.Teacher, role_type_1.RoleType.User),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'Get answers list',
        type: answers_page_dto_1.AnswersPageDto,
    }),
    __param(0, common_1.Query(new common_1.ValidationPipe({ transform: true }))),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [answers_page_options_dto_1.AnswersPageOptionsDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "getAnswers", null);
AnswerController = __decorate([
    common_1.Controller('answers'),
    swagger_1.ApiUseTags('answers'),
    common_1.UseGuards(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    common_1.UseInterceptors(auth_user_interceptor_service_1.AuthUserInterceptor),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [answer_service_1.AnswerService])
], AnswerController);
exports.AnswerController = AnswerController;
//# sourceMappingURL=answer.controller.js.map