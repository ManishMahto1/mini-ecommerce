import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/product.service';

const productService = new ProductService();

export class ProductController {
  async getAllProducts(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const products = await productService.getAllProducts();
      
      res.status(200).json({
        success: true,
        data: products,
        message: 'Products fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const product = await productService.getProductById(id);
      
      res.status(200).json({
        success: true,
        data: product,
        message: 'Product fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}
