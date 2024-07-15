import { Router } from 'express';
import { criarCliente, obterCliente } from '../controllers/clienteController';

const router = Router();

router.post('/clientes', criarCliente);
router.get('/clientes/:id', obterCliente);

export default router;
