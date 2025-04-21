import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { reportarConsulta, errorHandler } from './middleware/joyasmiddleware.js'
import joyasRoutes from './routes/joyasRoutes.js'

const app = express()
const PORT = process.env.PORT ?? 5000
app.use(cors())
app.use(express.json())

app.use(reportarConsulta) // middleware para reportar consultas
app.use('/api', joyasRoutes)

app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada')
  error.status = 404
  next(error)
})
app.use(errorHandler)

app.listen(PORT, console.log(`✨ Server is running on http://localhost:${PORT}`))
