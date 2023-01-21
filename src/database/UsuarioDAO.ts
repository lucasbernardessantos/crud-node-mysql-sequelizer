import { db } from "./db.js"
import { Usuario } from "../models/Usuario.js"

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
      return resultado
    } catch (error: any) {
      return error
    }finally {
      sequelize.close()
    }
  }

  static async selecionar(cpf: string): Promise<Usuario | null> {
    let sequelize = db.criarConexao()
    try {
      let resultado = await Usuario.findByPk(cpf)
      return resultado
    } catch (error: any) {
      return error
    } finally {
      sequelize.close()
    }
  }

  static async alterar(usuario: Usuario): Promise<number | any> {
    let sequelize = db.criarConexao()
    try {
      let linhasModificadas = await Usuario.update({
        nome: usuario.dataValues.nome,
        nascimento: usuario.dataValues.nascimento,
        sexo: usuario.dataValues.sexo,
        saldo: usuario.dataValues.saldo
      }, {
        where: {
          cpf: usuario.dataValues.cpf
        }
      })

      return linhasModificadas[0]
    } catch (error) {
      return error
    } finally {
      sequelize.close()
    }
  }
}