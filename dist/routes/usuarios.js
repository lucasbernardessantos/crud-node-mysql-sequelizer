"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.usuarioRouter = express_1.default.Router();
exports.usuarioRouter.get('/', (req, res) => {
    res.send('Página de Usuários').status(200);
});
exports.usuarioRouter.post('/cadastrar', (req, res) => {
    res.send('Cadastrar novo usuário').status(200);
});
exports.usuarioRouter.get('/buscar', (req, res) => {
    res.send('Buscar um usuário').status(200);
});
exports.usuarioRouter.put('/atualizar', (req, res) => {
    res.send('Atualizar usuário').status(200);
});
exports.usuarioRouter.delete('/deletar', (req, res) => {
    res.send('Deletar usuário').status(200);
});
