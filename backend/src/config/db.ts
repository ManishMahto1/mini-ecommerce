import { Product } from '../types/product.type';
import { CartItem } from '../types/cart.type';
import productsData from '../data/products.json';

// In-memory database simulation
class Database {
  private products: Product[] = [];
  private cart: CartItem[] = [];

  constructor() {
    this.initializeProducts();
  }

  private initializeProducts(): void {
    this.products = productsData as Product[];
  }

  // Product methods
  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  // Cart methods
  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(item: CartItem): CartItem {
    const existingItem = this.cart.find(cartItem => cartItem.productId === item.productId);
    
    if (existingItem) {
      existingItem.quantity += item.quantity;
      return existingItem;
    }
    
    this.cart.push(item);
    return item;
  }

  updateCartItem(id: string, quantity: number): CartItem | undefined {
    const item = this.cart.find(cartItem => cartItem.id === id);
    
    if (item) {
      item.quantity = quantity;
      return item;
    }
    
    return undefined;
  }

  removeFromCart(id: string): boolean {
    const index = this.cart.findIndex(cartItem => cartItem.id === id);
    
    if (index !== -1) {
      this.cart.splice(index, 1);
      return true;
    }
    
    return false;
  }

  clearCart(): void {
    this.cart = [];
  }
}

export const db = new Database();
