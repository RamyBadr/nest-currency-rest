"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const question_service_1 = require("./question.service");
const question_controller_1 = require("./question.controller");
const auth_module_1 = require("../auth/auth.module");
const question_repository_1 = require("./question.repository");
let QuestionModule = class QuestionModule {
};
QuestionModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => auth_module_1.AuthModule),
            typeorm_1.TypeOrmModule.forFeature([question_repository_1.QuestionRepository]),
        ],
        controllers: [question_controller_1.QuestionController],
        exports: [question_service_1.QuestionService],
        providers: [question_service_1.QuestionService],
    })
], QuestionModule);
exports.QuestionModule = QuestionModule;
//# sourceMappingURL=question.module.js.map