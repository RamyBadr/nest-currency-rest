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
const answer_service_1 = require("./answer.service");
const answer_controller_1 = require("./answer.controller");
const auth_module_1 = require("../auth/auth.module");
const answer_repository_1 = require("./answer.repository");
let AnswerModule = class AnswerModule {
};
AnswerModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => auth_module_1.AuthModule),
            typeorm_1.TypeOrmModule.forFeature([answer_repository_1.AnswerRepository]),
        ],
        controllers: [answer_controller_1.AnswerController],
        exports: [answer_service_1.AnswerService],
        providers: [answer_service_1.AnswerService],
    })
], AnswerModule);
exports.AnswerModule = AnswerModule;
//# sourceMappingURL=answer.module.js.map