import { CartItem } from '../types/cart.type';
import { db } from '../config/db';

export class CartModel {
  static async findAll(): Promise<CartItem[]> {
    return db.getCart();
  }

  static async create(item: CartItem): Promise<CartItem> {
    return db.addToCart(item);
  }

  static async update(id: string, quantity: number): Promise<CartItem | undefined> {
    return db.updateCartItem(id, quantity);
  }

  static async delete(id: string): Promise<boolean> {
    return db.removeFromCart(id);
  }

  static async clear(): Promise<void> {
    db.clearCart();
  }
}
