import { Router } from 'express';

// controllers
import ProductController from '../controllers/ProductController';

// validation
import ProductValidation from '../validation/ProductValidation';

const router = Router();

router.get('/products', ProductController.allProducts);
router.get('/products/:id', ProductController.getAProduct);
router.post('/products', ProductValidation.isCreateProductValid, ProductController.createProduct);
router.put('/products/:id', ProductValidation.isUpdateProductValid, ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteAProduct);

export default router;
