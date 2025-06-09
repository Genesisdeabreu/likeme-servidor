//Importamos las librerías necesarias:
const express = require('express'); //para crear el servidor
const cors = require('cors'); //para permitir conexiones del frontend
const pool = require('./db'); //para la conexión a la base de datos

const app = express(); //se crea la aplicación express

//Vienen los middlewares:
app.use(cors());            //habilitamos CORS
app.use(express.json());    //habilitamos express que permite leer JSON en las peticiones POST



// Ruta GET: para obtener todos los posts:
app.get('/posts', async (req, res) => {
  try {
    //aquí consultamos todos los registros de la tabla posts en pg:
    const result = await pool.query('SELECT * FROM posts');
    //y aquí enviamos los resultados al front en formato json:
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    res.status(500).json({ error: 'Error al obtener los posts' });
  }
});




// Ruta POST: para crear un nuevo post
app.post('/posts', async (req, res) => {
  try {
    //primero extraemos los datos enviados desde el frontend:
    const { titulo, img, descripcion, likes } = req.body;
    //luego insertamos los datos en la tabla posts:
    const result = await pool.query(
      'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
      [titulo, img, descripcion, likes]
    );
    //y respondemos con el nuevo post insertado:
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear post:', error);
    res.status(500).json({ error: 'Error al crear el post' });
  }
});




// Ruta PUT: para modificar un post específico para aumentar la cantidad de likes 
app.put("/posts/like/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al dar like:", error);
    res.status(500).json({ error: "Error al registrar el like" });
  }
});
//Esta ruta recibe el id del post por params
//aumenta 1 en el campo de likes del post con ese id
//luego devuelve el post actualizado
//y si no lo encuentra o hay un error lo maneja con los mensajes de error que establecimos




// Ruta DELETE: para eliminar un post por su id
app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    res.json({ mensaje: "Post eliminado correctamente", post: result.rows[0] });
  } catch (error) {
    console.error("Error al eliminar el post:", error);
    res.status(500).json({ error: "Error al eliminar el post" });
  }
});
//Esta ruta va a recibir el id desde los parámetros de la url
//va a intentar eliminar el post con ese id
//si no existe va a arrojar el error 404 de post no encontrado
//y si lo elimina va a responder con el mensaje de post eliminado correctamente
//los errores están siendo manejados con try y catch




//Por último levantamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

//Este archivo:
//es el corazón del servidor
//el que se va a encargar de recibir peticiones desde el front y responder conectándose a la base de datos 
//el que levanta el servidor backend usando express y define las rutas GET y POST
//también habilita CORS para que el frontend pueda conectarse a este servidor