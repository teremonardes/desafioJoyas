INSERT INTO inventario (nombre, categoria, metal, precio, stock) VALUES
  ('Collar Heart', 'collar', 'oro', 20000, 2),
  ('Collar History', 'collar', 'plata', 15000, 5),
  ('Aros Berry', 'aros', 'oro', 12000, 10),
  ('Aros Hook Blue', 'aros', 'oro', 25000, 4),
  ('Anillo Wish', 'aros', 'plata', 30000, 4),
  ('Anillo Cuarzo Greece', 'anillo', 'oro', 40000, 2);

'SELECT * FROM inventario'

'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s'

'SELECT * FROM $1 WHERE $2'