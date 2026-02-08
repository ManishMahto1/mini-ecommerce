import { Product } from '../types/product.type';
import { ProductModel } from '../models/product.model';

export class ProductService {
  async getAllProducts(): Promise<Product[]> {
    try {
      const products = await ProductModel.findAll();
      return products;
    } catch (error) {
      throw new Error('Failed to fetch products');
    }
  }

  async getProductById(id: string): Promise<Product> {
    try {
      const product = await ProductModel.findById(id);
      
      if (!product) {
        throw new Error('Product not found');
      }
      
      return product;
    } catch (error) {
      throw error;
    }
  }
}
