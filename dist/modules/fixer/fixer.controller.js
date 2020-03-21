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
const fixer_service_1 = require("./fixer.service");
const typeorm_1 = require("typeorm");
const currency_page_options_dto_1 = require("./dto/currency-page-options.dto");
let FixerController = class FixerController {
    constructor(fixerService) {
        this.fixerService = fixerService;
    }
    getSymbols() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.fixerService.getSymbols();
            return result.data;
        });
    }
    getLatest(pageOptionsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.fixerService.getLatest(pageOptionsDto);
            return result.data;
        });
    }
    convert(pageOptionsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.fixerService.convert(pageOptionsDto);
            return result.data;
        });
    }
};
__decorate([
    common_1.Get('symbols'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'Get Symbols endpoint',
        type: typeorm_1.Any,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FixerController.prototype, "getSymbols", null);
__decorate([
    common_1.Get('latest'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'Get latest rates endpoint',
        type: typeorm_1.Any,
    }),
    __param(0, common_1.Query(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_page_options_dto_1.LatestOptionsDto]),
    __metadata("design:returntype", Promise)
], FixerController.prototype, "getLatest", null);
__decorate([
    common_1.Get('convert'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'Convert endpoint, This is premium feature',
        type: typeorm_1.Any,
    }),
    __param(0, common_1.Query(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_page_options_dto_1.ConvertOptionsDto]),
    __metadata("design:returntype", Promise)
], FixerController.prototype, "convert", null);
FixerController = __decorate([
    common_1.Controller('currency'),
    swagger_1.ApiUseTags('currency'),
    __metadata("design:paramtypes", [fixer_service_1.FixerService])
], FixerController);
exports.FixerController = FixerController;
//# sourceMappingURL=fixer.controller.js.map