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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class LatestOptionsDto {
}
__decorate([
    class_validator_1.IsString({ each: true }),
    swagger_1.ApiModelProperty({ required: false, type: String, default: 'USD,CAD,JPY' }),
    __metadata("design:type", String)
], LatestOptionsDto.prototype, "symbols", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty({ required: false, type: String, default: 'EUR' }),
    __metadata("design:type", String)
], LatestOptionsDto.prototype, "base", void 0);
exports.LatestOptionsDto = LatestOptionsDto;
class ConvertOptionsDto {
}
__decorate([
    class_validator_1.IsString({ each: true }),
    swagger_1.ApiModelProperty({ required: true, type: String, default: 'EUR' }),
    __metadata("design:type", String)
], ConvertOptionsDto.prototype, "from", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty({ required: true, type: String, default: 'USD' }),
    __metadata("design:type", String)
], ConvertOptionsDto.prototype, "to", void 0);
__decorate([
    class_validator_1.IsNumberString(),
    swagger_1.ApiModelProperty({ required: true, type: String, default: '0' }),
    __metadata("design:type", String)
], ConvertOptionsDto.prototype, "amount", void 0);
exports.ConvertOptionsDto = ConvertOptionsDto;
//# sourceMappingURL=currency-page-options.dto.js.map