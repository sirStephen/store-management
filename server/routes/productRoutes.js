import { Router } from 'express';

// controllers
import ProductController from '../controllers/ProductController';

// validation
import ProductValidation from '../validation/ProductValidation';

// middlewares
import { isAdmin } from '../middlewares/checkAuth';

const router = Router();

router.get('/products', ProductController.allProducts);
router.get('/products/:id', ProductController.getAProduct);
router.post('/products', ProductValidation.isCreateProductValid, isAdmin, ProductController.createProduct);
router.put('/products/:id', ProductValidation.isUpdateProductValid, isAdmin, ProductController.updateProduct);
router.delete('/products/:id', isAdmin, ProductController.deleteAProduct);

export default router;
