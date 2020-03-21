"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fixer_service_1 = require("./fixer.service");
const fixer_controller_1 = require("./fixer.controller");
const config_service_1 = require("../../shared/services/config.service");
const shared_module_1 = require("../../shared/shared.module");
let FixerModule = class FixerModule {
};
FixerModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule, shared_module_1.SharedModule],
        controllers: [fixer_controller_1.FixerController],
        providers: [fixer_service_1.FixerService, config_service_1.ConfigService],
    })
], FixerModule);
exports.FixerModule = FixerModule;
//# sourceMappingURL=fixer.module.js.map