import express from 'express';
import morgan from 'morgan';
import mangaRouter from './routes/manga.routes.js';
import { config } from 'dotenv';

const app = express();

// Configuración de middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Establecer motor de plantillas EJS
app.set('view engine', 'ejs');

// Configurar rutas
app.use('/api/mangas', mangaRouter);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Devolver una respuesta de error con detalles del error
  res.status(500).json({ 
    error: 'Something broke!',
    message: err.message, // Mensaje de error
    stack: err.stack // Stack trace del error (traza de la pila)
  });
});


// Manejo de errores para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

config();

export default app;
