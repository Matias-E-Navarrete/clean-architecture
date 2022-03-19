import { Router } from 'express';
import { getUserById, getUsers } from '../../controllers/User/getUser';

const router: Router = Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
// router.post('/create', create)

export default router;
