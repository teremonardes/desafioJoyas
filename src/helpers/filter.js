export const sqlQuery = (entity, filters) => {
  const table = entity
  const conditions = Object.entries(filters).map(([key], i) => {
    if (key === 'precio_max') return `precio <= $${i + 1}`
    if (key === 'precio_min') return `precio >= $${i + 1}`
    if (key === 'categoria') return `categoria = $${i + 1}`
    if (key === 'metal') return `metal = $${i + 1}`
    return `${key} = $${i + 1}`
  }).join(' AND ')

  const values = Object.values(filters)
  const query = conditions
    ? `SELECT * FROM ${table} WHERE ${conditions}`
    : `SELECT * FROM ${table}`

  return { query, values }
}
