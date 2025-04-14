import { getJoyasModel, limitJoyasModel, limitOrderJoyasModel, filterJoyasModel } from '../models/joyasModels.js'
import { HATEOASAll } from '../helpers/hateoas.js'

export const getJoyasController = async (_, res) => {
  try {
    const joyas = await getJoyasModel()
    res.status(200).json({ joyas })
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener las joyas' })
    console.error('Error', error)
  }
}

export const limitJoyasController = async (req, res) => {
  try {
    const { limits } = req.query
    const result = await limitJoyasModel(limits)
    res.status(200).json({ inventario: result })
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener las joyas' })
    console.error('Error', error)
  }
}

export const limitOrderJoyasController = async (req, res) => {
  try {
    const { order_by, limits, page } = req.query
    const result = await limitOrderJoyasModel(order_by, limits, page)
    res.status(200).json({ inventario: result })
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener las joyas' })
    console.error('Error', error)
  }
}

export const filterJoyasController = async (req, res) => {
  try {
    const filters = req.query
    const result = await filterJoyasModel(filters)
    res.status(200).json({ inventario: result })
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener las joyas' })
    console.error('Error', error)
  }
}

export const getAllJoyasHateoas = async (req, res) => {
  try {
    const joyas = await getJoyasModel()
    const hateoas = HATEOASAll('joyas', joyas)
    res.status(200).json({ inventario: hateoas })
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener las joyas' })
    console.error('Error:', error)
  }
}
