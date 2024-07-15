import express from 'express';
import bodyParser from 'body-parser';
import clienteRoutes from './routes/clienteRoutes';
import gerenteRoutes from './routes/gerenteRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/api', clienteRoutes);
app.use('/api', gerenteRoutes);

export default app;
