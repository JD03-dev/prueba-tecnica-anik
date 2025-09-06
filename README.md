# Prueba Técnica

## Requisitos
- Node.js >= 18  yo utilice la 22.11.0
---

## Estructura del proyecto

```
/prueba-tecnica-anik
  /frontend
    /src
      /components
        ProductList.jsx
        ProductForm.jsx
        SearchBar.jsx
        SortSelect.jsx
      App.jsx
      main.jsx
    index.css
    package.json

  /backend
    /src
      /controllers
        products.controller.js
      /routes
        products.routes.js
      app.js
      data.js
    package.json

  README.md
  SQL.md
```

---

## Pasos para correr el proyecto

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
Disponible en: `http://localhost:5173`

### Backend (Node.js + Express)
```bash
cd backend
npm install
npm run dev
```
Disponible en: `http://localhost:3000`

> El frontend se conecta automaticamente al backend para listar y crear productos.  

---

## API – Endpoints disponibles

### Obtener productos
```
GET http://localhost:3000/products
```
Ejemplo con curl:
```bash
curl http://localhost:3000/products
```
Respuesta:
```json
[
  { "id": 1, "name": "Manzana", "price": 2000 },
  { "id": 2, "name": "Pera", "price": 3000 },
  { "id": 3, "name": "Mango", "price": 2300 }
]
```

### Crear producto
```
POST http://localhost:3000/products
```
Ejemplo con curl:
```bash
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name":"guayaba","price":500}'
```
Respuesta:
```json
{
  "id": 4,
  "name": "guayaba",
  "price": 500
}
```

### Validaciones
- `name`: obligatorio, debe ser texto.  
- `price`: obligatorio, numérico y mayor a 0.  

Ejemplo de error:
```json
{ "error": "El precio debe ser un número mayor a 0" }
```

---

## Decisiones tomadas
- Se utilizó una estructura modular en el backend separando **rutas** y **controladores** para mayor claridad.  
- En el frontend se aplicó división en componentes reutilizables (lista, buscador, formulario, orden).  
- Los datos están en memoria, conforme a lo solicitado en la prueba, para mantener la implementación simple.  

---

## Limitaciones conocidas
- Los datos no persisten al reiniciar el backend.  
- No se implementaron pruebas unitarias ni integración continua.  
- El frontend consume directamente del backend sin un manejo avanzado de errores ni estados de carga.  
