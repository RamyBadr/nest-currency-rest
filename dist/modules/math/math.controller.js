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
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let MathController = class MathController {
    call() {
        const pattern = { cmd: 'hello' };
        const data = [1, 2, 3, 4, 5];
        return this.client.send(pattern, data);
    }
    hello() {
        return 'hello world!!';
    }
};
__decorate([
    microservices_1.Client({ transport: microservices_1.Transport.TCP, options: { port: 4000 } }),
    __metadata("design:type", microservices_1.ClientProxy)
], MathController.prototype, "client", void 0);
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], MathController.prototype, "call", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'hello' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], MathController.prototype, "hello", null);
MathController = __decorate([
    common_1.Controller('')
], MathController);
exports.MathController = MathController;
//# sourceMappingURL=math.controller.js.map