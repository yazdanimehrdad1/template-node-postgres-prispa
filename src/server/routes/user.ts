import {Router} from 'express'
import { signin,createNewUser } from '@controllers'

const router = Router();
router.post('/user/signin',signin);
router.post('/user/signup',createNewUser);


export default router;
