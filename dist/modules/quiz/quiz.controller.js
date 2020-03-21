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
const quizes_page_options_dto_1 = require("./dto/quizes-page-options.dto");
const quizes_page_dto_1 = require("./dto/quizes-page.dto");
const quiz_service_1 = require("./quiz.service");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const QuizDto_1 = require("./dto/QuizDto");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../user/user.entity");
const QuizCreateDto_1 = require("./dto/QuizCreateDto");
const QuizUpdateDto_1 = require("./dto/QuizUpdateDto");
let QuizController = class QuizController {
    constructor(quizService) {
        this.quizService = quizService;
    }
    createQuiz(quizDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdQuiz = yield this.quizService.createQuiz(Object.assign({}, quizDto), user.toDto());
            return createdQuiz.toDto();
        });
    }
    updateOne(updateQuizParam, quizDto, user) {
        const result = this.quizService.updateQuiz(quizDto, updateQuizParam.id, user.toDto());
        return result;
    }
    getOne(getQuizParam, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = { id: getQuizParam.id };
            filter.role = user.role;
            if (user.role == role_type_1.RoleType.Teacher) {
                filter.author = user.toDto();
            }
            const quiz = yield this.quizService.getOne(filter, user.role);
            if (!quiz) {
                throw new common_1.NotFoundException();
            }
            return quiz ? quiz.toDto() : {};
        });
    }
    getQuizs(pageOptionsDto, user) {
        if (user.role == role_type_1.RoleType.Teacher) {
            pageOptionsDto.author_id = user.id;
            pageOptionsDto.author = user.toDto();
        }
        else {
            pageOptionsDto.ispublished = true;
        }
        return this.quizService.getQuizs(pageOptionsDto);
    }
};
__decorate([
    common_1.Post(''),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    roles_decorator_1.Roles(role_type_1.RoleType.Teacher),
    common_1.UseInterceptors(auth_user_interceptor_service_1.AuthUserInterceptor),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOkResponse({ type: QuizDto_1.QuizDto, description: 'Successfully created' }),
    __param(0, common_1.Body()),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuizCreateDto_1.QuizCreateDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "createQuiz", null);
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
    __metadata("design:paramtypes", [QuizUpdateDto_1.QuizIdParamsDto,
        QuizUpdateDto_1.QuizUpdateDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Object)
], QuizController.prototype, "updateOne", null);
__decorate([
    common_1.Get(':id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    roles_decorator_1.Roles(role_type_1.RoleType.Teacher, role_type_1.RoleType.User),
    common_1.UseInterceptors(auth_user_interceptor_service_1.AuthUserInterceptor),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param()),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuizUpdateDto_1.QuizIdParamsDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "getOne", null);
__decorate([
    common_1.Get(''),
    roles_decorator_1.Roles(role_type_1.RoleType.Teacher, role_type_1.RoleType.User),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'Get quizes list',
        type: quizes_page_dto_1.QuizsPageDto,
    }),
    __param(0, common_1.Query(new common_1.ValidationPipe({ transform: true }))),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quizes_page_options_dto_1.QuizsPageOptionsDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "getQuizs", null);
QuizController = __decorate([
    common_1.Controller('quizes'),
    swagger_1.ApiUseTags('quizes'),
    common_1.UseGuards(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    common_1.UseInterceptors(auth_user_interceptor_service_1.AuthUserInterceptor),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizController);
exports.QuizController = QuizController;
//# sourceMappingURL=quiz.controller.js.map