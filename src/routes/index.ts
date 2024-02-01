import express from 'express';
import UserRouter from './user.routes';
const router = express.Router();

router.use('/user', new UserRouter().router);

export default router;
