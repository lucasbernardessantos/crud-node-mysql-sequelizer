import express, { Request, Response } from 'express'

import { UsuarioDAO } from '../database/UsuarioDAO.js'
import { Usuario } from '../models/Usuario.js'

export const usuarioRouter = express.Router()

usuarioRouter.get('/', (req: Request, res: Response) => {
  res.send('Página de Usuários').status(200)
})

usuarioRouter.post('/cadastrar', async (req: Request, res: Response) => {
  const novoUsuario: {
    nome: string,
    cpf: string,
    nascimento: Date,
    sexo: string,
    saldo:number
  } = req.body

  let usuario = Usuario.build({
    nome: novoUsuario.nome, 
    cpf: novoUsuario.cpf, 
    nascimento: novoUsuario.nascimento, 
    sexo: novoUsuario.sexo, 
    saldo: novoUsuario.saldo
  })

  let resultado = await UsuarioDAO.cadastrar(usuario)

  console.log(resultado)

  res.send('Cadastrar novo usuário').status(200)
})

usuarioRouter.get('/buscar', (req: Request, res: Response) => {
  res.send('Buscar um usuário').status(200)
})

usuarioRouter.put('/atualizar', (req: Request, res: Response) => {
  res.send('Atualizar usuário').status(200)
})

usuarioRouter.delete('/deletar', (req: Request, res: Response) => {
  res.send('Deletar usuário').status(200)
})