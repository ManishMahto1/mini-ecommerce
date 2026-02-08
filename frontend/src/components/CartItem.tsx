'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CartItem as CartItemType } from '../types/cart';
import { useCart } from '../context/CartContext';
import styles from '../styles/CartItem.module.css';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 1) return;
    
    try {
      setIsUpdating(true);
      await updateQuantity(item.id, newQuantity);
    } catch (error) {
      console.error('Failed to update quantity:', error);
      alert('Failed to update quantity');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleRemove = async () => {
    if (confirm('Are you sure you want to remove this item?')) {
      try {
        await removeFromCart(item.id);
      } catch (error) {
        console.error('Failed to remove item:', error);
        alert('Failed to remove item');
      }
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <Image
          src={item.image}
          alt={item.name}
          width={100}
          height={100}
          className={styles.image}
        />
      </div>
      
      <div className={styles.details}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>₹{item.price.toFixed(2)}</p>
      </div>
      
      <div className={styles.quantityContainer}>
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={isUpdating || item.quantity <= 1}
          className={styles.quantityButton}
        >
          −
        </button>
        <span className={styles.quantity}>{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          disabled={isUpdating}
          className={styles.quantityButton}
        >
          +
        </button>
      </div>
      
      <div className={styles.totalContainer}>
        <p className={styles.total}>
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={handleRemove}
          className={styles.removeButton}
          disabled={isUpdating}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
