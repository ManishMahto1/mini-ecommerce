'use client';

import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/src/types/product';
import styles from '@/src/styles/ProductSlider.module.css';

interface Props {
  products: Product[];
  title?: string;
}

const ProductSlider: React.FC<Props> = ({ products, title }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;

    const scrollAmount = 320; // card width + gap
    sliderRef.current.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.wrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <div className={styles.container}>
        <button
          className={styles.arrow}
          onClick={() => scroll('left')}
          aria-label="scroll left"
        >
          ‹
        </button>

        <div ref={sliderRef} className={styles.slider}>
          {products.map((p) => (
            <div key={p.id} className={styles.slide}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <button
          className={styles.arrow}
          onClick={() => scroll('right')}
          aria-label="scroll right"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default ProductSlider;
