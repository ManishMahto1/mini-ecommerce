import { api } from '../lib/api';
import { CartItem } from '../types/cart';

export const cartService = {
  getCart: async (): Promise<CartItem[]> => {
    const response = await api.get('/api/cart');
    return response.data;
  },

  addToCart: async (productId: string, quantity: number): Promise<CartItem> => {
    const response = await api.post('/api/cart', { productId, quantity });
    return response.data;
  },

  updateCartItem: async (id: string, quantity: number): Promise<CartItem> => {
    const response = await api.put(`/api/cart/${id}`, { quantity });
    return response.data;
  },

  removeCartItem: async (id: string): Promise<void> => {
    await api.delete(`/api/cart/${id}`);
  },

  clearCart: async (): Promise<void> => {
    await api.delete('/api/cart');
  },
};
