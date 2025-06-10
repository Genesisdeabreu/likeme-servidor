# ❤️ Like Me - Red Social

Aplicación **backend con Node.js y Express** conectada a una base de datos **PostgreSQL**, que permite gestionar publicaciones de una red social simulada.
El sistema implementa operaciones **CRUD completas (Crear, Leer, Actualizar y Eliminar)** sobre los posts, y permite interactuar con ellos mediante likes.


---

## 🛠️ Tecnologías usadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-black?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


---

## 🚀 ¿Cómo usarlo?

### ▶️ Clonar y ejecutar el proyecto

```bash
git clone https://github.com/Genesisdeabreu/likeme-servidor.git
cd likeme-servidor
npm install
node backend/index.js
```


---

### 📁 Estructura del proyecto
- **backend/index.js**: Servidor principal con rutas y conexión a PostgreSQL
- **src/components/Post.jsx**: Componente React que consume la API
- **.gitignore**: Archivos que no deben subirse al repositorio
- **package.json**: Configuración del proyecto y dependencias


---

### 🛠️ Funcionalidades del CRUD
1. **GET** – Leer: Devuelve todos los posts almacenados. GET /posts
2. **POST** – Crear: Agrega un nuevo post con título, imagen, descripción y likes iniciales. POST /posts
3. **PUT** – Actualizar: Permite modificar los likes de un post. PUT /posts/like/:id
4. **DELETE** – Eliminar: Elimina un post por su ID. DELETE /posts/:id


---

### 📋 Requerimientos cumplidos de ambos desafíos 
1. Configurar servidor con Express ✅
2. Habilitar CORS con el paquete cors ✅
3. Conexión a PostgreSQL usando pg ✅
4. Crear y consultar registros con rutas GET y POST ✅
5. Editar y eliminar registros con rutas PUT y DELETE ✅
6. Manejo de errores con try y catch en consultas SQL ✅
7. Integración de frontend con React (cliente de apoyo) ✅


---

### 👩‍💻 Autor
**Génesis de Abreu**  
*Desarrolladora Frontend Junior* 💻🎨✨  
[GitHub](https://github.com/Genesisdeabreu)