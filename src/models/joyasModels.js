import pool from '../../database/config.js'
import format from 'pg-format'
import { sqlQuery } from '../helpers/filter.js'

// GET ALL JOYAS
export const getJoyasModel = async () => {
  const sqlQuery = 'SELECT * FROM inventario'
  const response = await pool.query(sqlQuery)
  return response.rows
}

// GET JOYAS LIMIT ORDER
export const limitOrderJoyasModel = async (
  order_by = 'id_DESC',
  limits = 3,
  page = 0
) => {
  const [order, direction] = order_by.split('_')
  const offset = page * limits
  const sqlQuery = format(
    'SELECT * FROM inventario ORDER BY %I %s LIMIT %L OFFSET %L',
    order,
    direction,
    limits,
    offset
  )
console.log(sqlQuery, "🌸🌸🌸🌸🌸")
  const result = await pool.query(sqlQuery)
  return result.rows
}

// GET JOYAS CON FILTERS
export const filterJoyasModel = async (filters) => {
  const { query, values } = sqlQuery('inventario', filters)
  const result = await pool.query(query, values)
  return result.rows
}
