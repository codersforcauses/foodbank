import { Router } from 'express'

const router = Router()

/* GET page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

export default router
