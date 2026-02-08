import { CartItem, AddToCartRequest } from '../types/cart.type';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

export class CartService {
  async getCart(): Promise<CartItem[]> {
    try {
      const cart = await CartModel.findAll();
      return cart;
    } catch (error) {
      throw new Error('Failed to fetch cart');
    }
  }

  async addToCart(data: AddToCartRequest): Promise<CartItem> {
    try {
      const product = await ProductModel.findById(data.productId);
      
      if (!product) {
        throw new Error('Product not found');
      }

      if (product.stock < data.quantity) {
        throw new Error('Insufficient stock');
      }

      const cartItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: data.quantity,
        image: product.image
      };

      const result = await CartModel.create(cartItem);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateCartItem(id: string, quantity: number): Promise<CartItem> {
    try {
      if (quantity <= 0) {
        throw new Error('Quantity must be greater than 0');
      }

      const result = await CartModel.update(id, quantity);
      
      if (!result) {
        throw new Error('Cart item not found');
      }
      
      return result;
    } catch (error) {
      throw error;
    }
  }

  async removeCartItem(id: string): Promise<void> {
    try {
      const result = await CartModel.delete(id);
      
      if (!result) {
        throw new Error('Cart item not found');
      }
    } catch (error) {
      throw error;
    }
  }

  async clearCart(): Promise<void> {
    try {
      await CartModel.clear();
    } catch (error) {
      throw new Error('Failed to clear cart');
    }
  }
}
