import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';

const router = Router();
const productController = new ProductController();

// GET /api/products - Get all products
router.get('/', productController.getAllProducts.bind(productController));

// GET /api/products/:id - Get single product
router.get('/:id', productController.getProductById.bind(productController));

export default router;
