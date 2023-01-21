"use strict";
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
exports.usuarioRouter = void 0;
const express_1 = __importDefault(require("express"));
const UsuarioDAO_js_1 = require("../database/UsuarioDAO.js");
const Usuario_js_1 = require("../models/Usuario.js");
exports.usuarioRouter = express_1.default.Router();
exports.usuarioRouter.get('/', (req, res) => {
    res.send('Página de Usuários').status(200);
});
exports.usuarioRouter.post('/cadastrar', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const novoUsuario = req.body;
    let usuario = Usuario_js_1.Usuario.build({
        nome: novoUsuario.nome,
        cpf: novoUsuario.cpf,
        nascimento: novoUsuario.nascimento,
        sexo: novoUsuario.sexo,
        saldo: novoUsuario.saldo
    });
    let resultado = yield UsuarioDAO_js_1.UsuarioDAO.cadastrar(usuario);
    if (resultado instanceof Usuario_js_1.Usuario) {
        res.status(201).json(resultado);
    }
    else {
        res.status(400).send(resultado.name);
    }
}));
exports.usuarioRouter.get('/buscar/:cpf', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resultado = yield UsuarioDAO_js_1.UsuarioDAO.selecionar(req.params.cpf);
    res.status(200).send(resultado);
}));
exports.usuarioRouter.put('/atualizar', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = req.body;
    let usuarioAtualizado = Usuario_js_1.Usuario.build({
        nome: usuario.nome,
        cpf: usuario.cpf,
        nascimento: usuario.nascimento,
        sexo: usuario.sexo,
        saldo: usuario.saldo
    });
    let linhasModificadas = yield UsuarioDAO_js_1.UsuarioDAO.alterar(usuarioAtualizado);
    console.log(linhasModificadas);
    res.status(201).json(linhasModificadas);
}));
exports.usuarioRouter.delete('/deletar', (req, res) => {
    res.send('Deletar usuário').status(200);
});
