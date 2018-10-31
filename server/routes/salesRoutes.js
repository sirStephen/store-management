import { Router } from 'express';

// controllers
import SalesController from '../controllers/SalesController';

// validation
import SaleValidation from '../validation/SaleValidation';

// middlewares
// import token from '../middlewares/token';
// import admin from '../middlewares/admin';

const router = Router();

router.get('/sales', SalesController.allSales);
router.get('/sales/:id', SalesController.getASale);
router.post('/sales', SaleValidation.isCreateSaleValid, SalesController.createSale);

export default router;
