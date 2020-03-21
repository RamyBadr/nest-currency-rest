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
const questions_page_options_dto_1 = require("./dto/questions-page-options.dto");
const questions_page_dto_1 = require("./dto/questions-page.dto");
const question_service_1 = require("./question.service");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const QuestionDto_1 = require("./dto/QuestionDto");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../user/user.entity");
const QuestionCreateDto_1 = require("./dto/QuestionCreateDto");
const QuestionUpdateDto_1 = require("./dto/QuestionUpdateDto");
const quiz_entity_1 = require("../quiz/quiz.entity");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    createQuestion(questionDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const quiz = new quiz_entity_1.QuizEntity();
            quiz.id = questionDto.quizId;
            delete questionDto.quizId;
            const createdQuestion = yield this.questionService.createQuestion(Object.assign({}, questionDto), quiz);
            return createdQuestion.toDto();
        });
    }
    updateOne(updateQuestionParam, questionDto, user) {
        const result = this.questionService.updateQuestion(questionDto, updateQuestionParam.id);
        return result;
    }
    getQuestions(pageOptionsDto, user) {
        if (user.role == role_type_1.RoleType.Teacher) {
        }
        else {
            pageOptionsDto.ispublished = true;
        }
        return this.questionService.getQuestions(pageOptionsDto);
    }
};
__decorate([
    common_1.Post(''),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    roles_decorator_1.Roles(role_type_1.RoleType.Teacher),
    common_1.UseInterceptors(auth_user_interceptor_service_1.AuthUserInterceptor),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOkResponse({ type: QuestionDto_1.QuestionDto, description: 'Successfully created' }),
    __param(0, common_1.Body()),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuestionCreateDto_1.QuestionCreateDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createQuestion", null);
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
    __metadata("design:paramtypes", [QuestionUpdateDto_1.QuestionUpdateParamsDto,
        QuestionUpdateDto_1.QuestionUpdateDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Object)
], QuestionController.prototype, "updateOne", null);
__decorate([
    common_1.Get('questions'),
    roles_decorator_1.Roles(role_type_1.RoleType.Teacher, role_type_1.RoleType.User),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'Get questions list',
        type: questions_page_dto_1.QuestionsPageDto,
    }),
    __param(0, common_1.Query(new common_1.ValidationPipe({ transform: true }))),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [questions_page_options_dto_1.QuestionsPageOptionsDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getQuestions", null);
QuestionController = __decorate([
    common_1.Controller('questions'),
    swagger_1.ApiUseTags('questions'),
    common_1.UseGuards(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    common_1.UseInterceptors(auth_user_interceptor_service_1.AuthUserInterceptor),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map