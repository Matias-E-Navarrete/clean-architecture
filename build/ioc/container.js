"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_express_1 = require("awilix-express");
const awilix_1 = require("awilix");
exports.default = (app) => {
    const container = (0, awilix_1.createContainer)({ injectionMode: awilix_1.InjectionMode.CLASSIC });
    container.register({});
    app.use((0, awilix_express_1.scopePerRequest)(container));
};
//# sourceMappingURL=container.js.map