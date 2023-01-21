import express, { Request, Response } from 'express'

import { UsuarioDAO } from '../database/UsuarioDAO.js'
import { InUsuario } from '../interface/InUsuario.js'
import { Usuario } from '../models/Usuario.js'

export const usuarioRouter = express.Router()

usuarioRouter.get('/', (req: Request, res: Response) => {
  res.send('Página de Usuários').status(200)
})

usuarioRouter.post('/cadastrar', async (req: Request, res: Response) => {
  const novoUsuario: InUsuario = req.body

  let usuario = Usuario.build({
    nome: novoUsuario.nome, 
    cpf: novoUsuario.cpf, 
    nascimento: novoUsuario.nascimento, 
    sexo: novoUsuario.sexo, 
    saldo: novoUsuario.saldo
  })

  let resultado: Usuario | any = await UsuarioDAO.cadastrar(usuario)

  if (resultado instanceof Usuario) {
    res.status(201).json(resultado)
  }
  else {
    res.status(400).send(resultado.name)
  }
})

usuarioRouter.get('/buscar/:cpf', async (req: Request, res: Response) => {
  let resultado = await UsuarioDAO.selecionar(req.params.cpf)

  res.status(200).send(resultado)
})

usuarioRouter.put('/atualizar', async (req: Request, res: Response) => {
  const usuario: InUsuario = req.body

  let usuarioAtualizado = Usuario.build({
    nome: usuario.nome,
    cpf: usuario.cpf,
    nascimento: usuario.nascimento,
    sexo: usuario.sexo,
    saldo: usuario.saldo
  })

  let linhasModificadas = await UsuarioDAO.alterar(usuarioAtualizado)

  console.log(linhasModificadas)

  res.status(201).json(linhasModificadas)
})

usuarioRouter.delete('/deletar', (req: Request, res: Response) => {
  res.send('Deletar usuário').status(200)
})