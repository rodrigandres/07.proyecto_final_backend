import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import googleMapsRoutes from './routes/googleMaps.routes.js'

const PORT = process.env.PORT ?? 3000
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'

const app = express()

app.use(morgan('dev'))

app.use(cors({ origin: FRONTEND_URL, credentials: true }))
app.use(express.json())

app.get('/', (_, res) => {
  res.json({ message: 'Welcome to my API' })
})

app.use('/api', authRoutes)

app.use('/api', googleMapsRoutes)

app.all('*', (_, res) => res.status(404).json({ code: 404, message: 'Página no encontrada' }))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

export default app
