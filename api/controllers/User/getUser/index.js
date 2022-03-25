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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementController = void 0;
const express_1 = __importDefault(require("express"));
const awilix_express_1 = require("awilix-express");
let MovementController = class MovementController {
    constructor(userService) {
        this.userService = userService;
    }
    all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send(console.log("first"));
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            try {
                const id = Number(req.params.id);
                const result = yield this.userService.find(id);
                if (result) {
                    res.send(result);
                }
                else {
                    res.status(404);
                    res.send();
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
__decorate([
    (0, awilix_express_1.GET)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MovementController.prototype, "all", null);
__decorate([
    (0, awilix_express_1.route)('/:id'),
    (0, awilix_express_1.GET)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MovementController.prototype, "find", null);
MovementController = __decorate([
    (0, awilix_express_1.route)('/users'),
    __metadata("design:paramtypes", [Object])
], MovementController);
exports.MovementController = MovementController;
//# sourceMappingURL=index.js.map