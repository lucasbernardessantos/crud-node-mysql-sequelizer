import express, { Request, Response } from 'express'

export const usuarioRouter = express.Router()

usuarioRouter.get('/', (req: Request, res: Response) => {
  res.send('Página de Usuários').status(200)
})

usuarioRouter.post('/cadastrar', (req: Request, res: Response) => {
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