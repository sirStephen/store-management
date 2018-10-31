import { Router } from 'express';

// controllers
import SalesController from '../controllers/SalesController';

// validation
import SaleValidation from '../validation/SaleValidation';

// middlewares
import { isUser } from '../middlewares/checkAuth';

const router = Router();

router.get('/sales', SalesController.allSales);
router.get('/sales/:id', isUser, SalesController.getASale);
router.post('/sales', SaleValidation.isCreateSaleValid, SalesController.createSale);

export default router;
