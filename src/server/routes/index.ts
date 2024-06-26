import healthRouts from './health';
import userRoutes from './user';
import { Router } from 'express';

const router = Router()

router.use(healthRouts)
router.use(userRoutes)


export default router;

