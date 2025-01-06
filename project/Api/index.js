import 'dotenv/config';
import db from 'dat';
import express from 'express';
import cors from 'cors';

import { productsRouter, usersRouter, cartRouter, orderRouter, paymentsRouter } from './routes/index.js';
import { errorHandler } from './middleware/index.js';

const server = express();

// Middleware y configuraciones
server.use(
    cors({
        origin: '*',  // Permite todos los orígenes para pruebas
        credentials: true,
    })
)

// Ruta principal
server.get('/', (_, res) => res.send('Welcome to Entelequia Comic - Book Store API!'));

// Rutas de la API
server.use('/users', usersRouter);
server.use('/products', productsRouter);
server.use('/carts', cartRouter);
server.use('/orders', orderRouter);
server.use('/payments', paymentsRouter);

server.use(errorHandler);

// Conexión a la base de datos
db.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to db'))
    .catch((error) => {
        console.error('Database connection failed', error);
        process.exit(1);
    });

// Modo de ejecución local (cuando no está en Vercel)
if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 7000;
    server.listen(PORT, () => console.log(`API listening on port ${PORT}`));
}

// No forzar redirección a HTTPS
// Solo habilita HTTPS si está en producción en Vercel
if (process.env.VERCEL) {
    server.use((req, res, next) => {
        // Si está en producción (Vercel), no forzar HTTPS
        next();
    });
}

// Exporta el servidor para Vercel
export default server;
