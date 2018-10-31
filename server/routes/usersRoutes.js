import { Router } from 'express';

// controllers
import AuthControllers from '../controllers/AuthControllers';

// validation
import AuthValidation from '../validation/AuthValidation';

// middlewares
// import token from '../middlewares/token';
// import admin from '../middlewares/admin';

const router = Router();

router.post('/users/signup', AuthValidation.isSignupDetailsValid, AuthControllers.signup);
router.post('/users/login', AuthValidation.isLoginDetailsValid, AuthControllers.login);

export default router;
