"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_js_1 = require("../database/db.js");
let sequelize = db_js_1.db.criarConexao();
class Usuario extends sequelize_1.Model {
}
Usuario.init({
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    nascimento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    sexo: {
        type: sequelize_1.DataTypes.ENUM('F', 'M'),
        allowNull: false
    },
    saldo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'usuario'
});
