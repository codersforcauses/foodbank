import { Request, Response, NextFunction } from 'express'
import app from './app'

const port = app.get('port')
const server = app.listen(port)

// app.use(
//   async (
//     err: Error & Record<string, unknown>,
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     err.statusCode = err?.statusCode || 500
//     err.status = err.status || 'error'

//     res.status(err?.statusCode).json({
//       status: err.status,
//       message: err.message
//     })
//   }
// )

process.on('unhandledRejection', (reason, p) =>
  console.error('Unhandled Rejection at: Promise ', p, reason)
)

// ! Do not touch, colour codes output
server.on('listening', () => {
  console.clear()
  console.log(
    'Foodbank server started on \x1b[32mhttp://%s:%d',
    app.get('host'),
    port
  )
  console.log('\x1b[33mTo restart server, type `rs`\x1b[0m')
})
