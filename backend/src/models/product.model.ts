import { Product } from '../types/product.type';
import { db } from '../config/db';

export class ProductModel {
  static async findAll(): Promise<Product[]> {
    return db.getAllProducts();
  }

  static async findById(id: string): Promise<Product | undefined> {
    return db.getProductById(id);
  }
}
