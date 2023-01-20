"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
class db {
    static criarConexao() {
        return new sequelize_1.Sequelize('empresa_a', 'root', 'garf@1234', {
            host: '127.0.0.1',
            dialect: 'mysql'
        });
    }
}
exports.db = db;
let sequelize = db.criarConexao();
sequelize.authenticate()
    .then(() => {
    console.log(`Conexão com o banco bem sucedida`);
})
    .catch((err) => {
    console.log(`Erro na conexão com o banco: ${err}`);
});
