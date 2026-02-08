import { Router } from 'express';
import { CartController } from '../controllers/cart.controller';
import { validateAddToCart, validateUpdateCart } from '../middleware/validate.middleware';

const router = Router();
const cartController = new CartController();

// GET /api/cart - Get cart items
router.get('/', cartController.getCart.bind(cartController));

// POST /api/cart - Add item to cart
router.post('/', validateAddToCart, cartController.addToCart.bind(cartController));

// PUT /api/cart/:id - Update cart item quantity
router.put('/:id', validateUpdateCart, cartController.updateCartItem.bind(cartController));

// DELETE /api/cart/:id - Remove item from cart
router.delete('/:id', cartController.removeCartItem.bind(cartController));

// DELETE /api/cart - Clear cart
router.delete('/', cartController.clearCart.bind(cartController));

export default router;
