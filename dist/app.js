"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverConfig_1 = require("./serverConfig");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});
app.listen(serverConfig_1.serverConfig.port, serverConfig_1.serverConfig.ip, () => {
    console.log(`Servidor rodando em http://${serverConfig_1.serverConfig.ip}:${serverConfig_1.serverConfig.port}`);
});
//# sourceMappingURL=app.js.map