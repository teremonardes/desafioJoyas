import { Router } from 'express'
import {
  getAllJoyasHateoas,
  limitOrderJoyasController,
  filterJoyasController
} from '../src/controllers/joyasController.js'

const router = Router()

router.get('/joyas', getAllJoyasHateoas)
router.get('/joyas/limits', limitOrderJoyasController)
router.get('/joyas/filtros', filterJoyasController)

export default router
