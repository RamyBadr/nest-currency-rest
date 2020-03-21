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
const PageOptionsDto_1 = require("../../../common/dto/PageOptionsDto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class AnswersPageOptionsDto extends PageOptionsDto_1.PageOptionsDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsUUID(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty({ required: true }),
    __metadata("design:type", String)
], AnswersPageOptionsDto.prototype, "questionId", void 0);
__decorate([
    class_validator_1.IsBooleanString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelProperty({ required: false, type: Boolean }),
    __metadata("design:type", Boolean)
], AnswersPageOptionsDto.prototype, "iscorrect", void 0);
exports.AnswersPageOptionsDto = AnswersPageOptionsDto;
//# sourceMappingURL=answers-page-options.dto.js.map