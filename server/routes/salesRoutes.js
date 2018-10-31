import { Router } from 'express';

// controllers
import SalesController from '../controllers/SalesController';

// validation
import SaleValidation from '../validation/SaleValidation';

// middlewares
import { isUser, isAdmin } from '../middlewares/checkAuth';

const router = Router();

router.get('/sales', isAdmin, SalesController.allSales);
router.get('/sales/:id', isUser, SalesController.getASale);
router.post('/sales', SaleValidation.isCreateSaleValid, isUser, SalesController.createSale);

export default router;
