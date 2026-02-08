'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const { getCartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h1>Mini Shop</h1>
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Products
          </Link>

          <Link href="/cart" className={styles.cartLink}>
            
            <ShoppingCart size={20} className={styles.cartIcon} />

            Cart

            {getCartCount() > 0 && (
              <span className={styles.badge}>
                {getCartCount()}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
