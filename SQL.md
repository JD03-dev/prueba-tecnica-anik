# Solucion para el archivo SQL.md

## 1. Normalizacion  
La normalización ayuda a reducir la redundancia de datos y evitar inconsistencias durante inserciones, actualizaciones o eliminaiciones.  
Ejemplo:  
- **1NF**: cada columna debe contener un unico valor atomico (ejemplo, separar una columna `telefonos` en varias filas).  
- **2NF**: cada columna no clave debe depender de la clave completa (ejemplo, separar datos de cliente de los pedidos).  
- **3NF**: eliminar dependencias transitivas (ejemplo, si `ciudad` depende de `codigo_postal`, esa relacion se separa en otra tabla).  

---

## 2. JOIN con clientes y pedidos
```sql
SELECT c.name AS customer_name, 
       c.email, 
       COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name, c.email
```
Esta query lista todos los clientes, incluyendo aquellos sin pedidos es decir con valor 0.  

---

## 3. Top 3 productos mas caros
```sql
SELECT id, name, price
FROM products
ORDER BY price DESC
LIMIT 3
```

---

## 4. Prevencion de SQL Injection en Node.js
La tecnica recomendada es usar **consultas parametrizadas**, evitando concatenar strings en las queries.  
doy un ejemplo con `pg` (PostgreSQL):  

```js
const query = "SELECT * FROM users WHERE email = $1";
const values = [userEmail];
client.query(query, values);
```
De esta forma, los parámetros son tratados de manera segura, previniendo inyecciones SQL.  
