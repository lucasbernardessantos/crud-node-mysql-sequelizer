import { db } from "./db.js"
import { Usuario } from "../models/Usuario.js"
import { Error } from "sequelize"

export class UsuarioDAO {
  static async cadastrar(usuario: Usuario): Promise<Usuario | any> {
    let sequelize = db.criarConexao()

    try {
      let resultado = await Usuario.create({
        nome: usuario.dataValues.nome,
        cpf: usuario.dataValues.cpf,
        nascimento: usuario.dataValues.nascimento,
        sexo: usuario.dataValues.sexo,
        saldo: usuario.dataValues.saldo
      })

      console.log(`Resultado: ${resultado}`)

      return resultado
    } catch (err: any) {
      return err
    }finally {
      sequelize.close()
    }
  }
}