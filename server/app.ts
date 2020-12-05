import express, { Application } from 'express'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const port = parseInt(process.env.PORT || '3030', 10)
const host = process.env.HOST || 'localhost'

const app: Application = express()

// Enable security, CORS, compression, and body parsing
app.use(helmet())
app.use(cors())
app.use(compress())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('host', host)
app.set('port', port)

export default app
