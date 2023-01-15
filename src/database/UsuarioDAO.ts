import { db } from "./db.js"
import { Usuario } from "../models/Usuario.js"

export class UsuarioDAO {
  static async cadastrar(usuario: Usuario): Promise<Usuario> {
    let sequelize = db.criarConexao()

    try {
      let resultado = await Usuario.create({
        nome: usuario.dataValues.nome,
        cpf: usuario.dataValues.cpf,
        nascimento: usuario.dataValues.nascimento,
        sexo: usuario.dataValues.sexo,
        saldo: usuario.dataValues.saldo
      })
      return resultado
    } catch (err) {
      throw err
    }finally {
      sequelize.close()
    }
  }
}