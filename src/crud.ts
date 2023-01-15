import express, { Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'

import { usuarioRouter } from './routes/usuarios'
import swaggerDocs from "./swagger.json"

const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use('/usuario', usuarioRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get('/', (req: Request, res: Response) => {
  res.send('Home')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})