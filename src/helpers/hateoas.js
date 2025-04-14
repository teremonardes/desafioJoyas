
export const HATEOASAll = (entity, data) => {
  const result = data.map((item) => ({
    nombre: item.nombre,
    precio: item.precio,
    stock: item.stock,
    links: [
      {
        rel: 'self',
        href: `http://localhost:3000/${entity}/${item.id}`,
        type: 'GET'
      }
    ]
  }))
  return {
    total_items: data.length,
    results: result
  }
}
