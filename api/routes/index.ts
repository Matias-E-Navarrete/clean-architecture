import { Router } from 'express';
import { userRoutes } from './User/router';

export const router: Router = Router();

router.use('/users', userRoutes)
//#region all Routes 
// router.use('/users', userRoutes)
// router.use('/users', userRoutes)
// router.use('/users', userRoutes)
// router.use('/users', userRoutes)
// router.use('/users', userRoutes)

