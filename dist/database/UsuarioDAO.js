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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioDAO = void 0;
const db_js_1 = require("./db.js");
const Usuario_js_1 = require("../models/Usuario.js");
class UsuarioDAO {
    static cadastrar(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            let sequelize = db_js_1.db.criarConexao();
            try {
                let resultado = yield Usuario_js_1.Usuario.create({
                    nome: usuario.dataValues.nome,
                    cpf: usuario.dataValues.cpf,
                    nascimento: usuario.dataValues.nascimento,
                    sexo: usuario.dataValues.sexo,
                    saldo: usuario.dataValues.saldo
                });
                console.log(`Resultado: ${resultado}`);
                return resultado;
            }
            catch (err) {
                return err;
            }
            finally {
                sequelize.close();
            }
        });
    }
}
exports.UsuarioDAO = UsuarioDAO;
