import { Router } from 'express'
import {
  getAllJoyasHateoas,
  getJoyasController,
  limitJoyasController,
  limitOrderJoyasController,
  filterJoyasController
} from '../src/controllers/joyasController.js'

const router = Router()

router.get('/joyas', getAllJoyasHateoas) // Esta es la que necesitas
router.get('/joyas/todas', getJoyasController)
router.get('/joyas/limit', limitJoyasController)
router.get('/joyas/order', limitOrderJoyasController)
router.get('/joyas/filtros', filterJoyasController)

export default router
