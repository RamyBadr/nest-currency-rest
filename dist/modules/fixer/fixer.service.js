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
const config_service_1 = require("../../shared/services/config.service");
let FixerService = class FixerService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    getLatest(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpService
                .get(this.configService.fixerBaseUrl + '/latest', {
                params: Object.assign({ access_key: this.configService.fixerApiKey }, params),
            })
                .toPromise();
        });
    }
    convert(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpService
                .get(this.configService.fixerBaseUrl + '/convert', {
                params: Object.assign({ access_key: this.configService.fixerApiKey }, params),
            })
                .toPromise();
        });
    }
    getSymbols() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpService
                .get(this.configService.fixerBaseUrl + '/symbols', {
                params: {
                    access_key: this.configService.fixerApiKey,
                },
            })
                .toPromise();
        });
    }
};
FixerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService,
        config_service_1.ConfigService])
], FixerService);
exports.FixerService = FixerService;
//# sourceMappingURL=fixer.service.js.map