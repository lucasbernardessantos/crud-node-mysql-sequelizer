import { Sequelize } from "sequelize"

export class db {
  static criarConexao(): Sequelize {
    return new Sequelize('usuarios', 'root', '', {
      host: 'localhost',
      dialect: 'mysql'
    })
  }
}

let sequelize = db.criarConexao()

sequelize.authenticate()
  .then(() => {
    console.log(`Conexão com o banco bem sucedida`)
  })
  .catch((err) => {
    console.log(`Erro na conexão com o banco: ${err}`)
  })