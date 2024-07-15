import { Router } from 'express';
import { criarGerente, obterGerente } from '../controllers/gerenteController';

const router = Router();

router.post('/gerentes', criarGerente);
router.get('/gerentes/:id', obterGerente);

export default router;
