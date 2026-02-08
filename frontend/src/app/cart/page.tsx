'use client';

import React from 'react';
import Link from 'next/link';
import CartItem from '../../components/CartItem';
import { useCart } from '../../context/CartContext';
import styles from '../../styles/Cart.module.css';

export default function CartPage() {
  const { cart, getCartTotal, clearCart, loading } = useCart();

  const handleClearCart = async () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      try {
        await clearCart();
      } catch (error) {
        console.error('Failed to clear cart:', error);
        alert('Failed to clear cart');
      }
    }
  };

  if (loading && cart.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading cart...</p>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <Link href="/" className={styles.shopButton}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Shopping Cart</h1>
        <button
          onClick={handleClearCart}
          className={styles.clearButton}
          disabled={loading}
        >
          Clear Cart
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.items}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>₹{getCartTotal().toFixed(2)}</span>
          </div>
          
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          
          <div className={styles.summaryRow}>
            <span>Tax</span>
            <span>₹{(getCartTotal() * 0.1).toFixed(2)}</span>
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>₹{(getCartTotal() * 1.1).toFixed(2)}</span>
          </div>

          <button className={styles.checkoutButton} disabled={loading}>
            Proceed to Checkout
          </button>

          <Link href="/" className={styles.continueLink}>
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
