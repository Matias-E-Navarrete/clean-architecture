"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const awilix_express_1 = require("awilix-express");
const container_1 = __importDefault(require("./ioc/container"));
const PORT = Number(process.env.PORT) || 3000;
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
(0, container_1.default)(exports.app);
exports.app.use((0, awilix_express_1.loadControllers)('./controllers/**/*.ts', { cwd: __dirname }));
exports.app.get('/', (req, res) => res.send('Hellou capo'));
exports.app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT} 🏃`);
});
//# sourceMappingURL=app.js.map