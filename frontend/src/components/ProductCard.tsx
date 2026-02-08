'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import styles from '../styles/ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = async () => {
    try {
      setIsAdding(true);
      await addToCart(product.id, 1);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      alert('Failed to add to cart');
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className={styles.image}
        />
        {product.stock < 10 && (
          <span className={styles.stockBadge}>
            Only {product.stock} left!
          </span>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        
        <div className={styles.footer}>
          <span className={styles.price}>₹{product.price.toFixed(2)}</span>
          
          <button
            onClick={handleAddToCart}
            disabled={isAdding || product.stock === 0}
            className={`${styles.button} ${showSuccess ? styles.success : ''}`}
          >
            {showSuccess ? '✓ Added!' : isAdding ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
