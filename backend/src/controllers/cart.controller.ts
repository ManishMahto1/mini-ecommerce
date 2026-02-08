import { Request, Response, NextFunction } from 'express';
import { CartService } from '../services/cart.service';
import { AddToCartRequest, UpdateCartRequest } from '../types/cart.type';

const cartService = new CartService();

export class CartController {
  async getCart(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const cart = await cartService.getCart();
      
      res.status(200).json({
        success: true,
        data: cart,
        message: 'Cart fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  async addToCart(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data: AddToCartRequest = req.body;
      const cartItem = await cartService.addToCart(data);
      
      res.status(201).json({
        success: true,
        data: cartItem,
        message: 'Item added to cart successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  async updateCartItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { quantity }: UpdateCartRequest = req.body;
      
      const cartItem = await cartService.updateCartItem(id, quantity);
      
      res.status(200).json({
        success: true,
        data: cartItem,
        message: 'Cart item updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  async removeCartItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await cartService.removeCartItem(id);
      
      res.status(200).json({
        success: true,
        message: 'Item removed from cart successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  async clearCart(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await cartService.clearCart();
      
      res.status(200).json({
        success: true,
        message: 'Cart cleared successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}
