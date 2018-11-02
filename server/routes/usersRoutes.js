import { Router } from 'express';

// controllers
import UsersControllers from '../controllers/UsersControllers';

// validation
import AuthValidation from '../validation/AuthValidation';

// middleware
import { isAdmin } from '../middlewares/checkAuth';

const router = Router();

router.post('/users/signup', AuthValidation.isSignupDetailsValid, isAdmin, UsersControllers.signup);
router.post('/users/login', AuthValidation.isLoginDetailsValid, UsersControllers.login);

export default router;
