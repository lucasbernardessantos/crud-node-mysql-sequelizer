import { DataTypes, Model, BaseError } from "sequelize"
import { db } from "../database/db.js"

let sequelize = db.criarConexao()

export class Usuario extends Model {}

Usuario.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  nascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  sexo: {
    type: DataTypes.ENUM('F', 'M'),
    allowNull: false
  },
  saldo: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  freezeTableName: true,
  timestamps: false,
  modelName: 'usuarios'
})