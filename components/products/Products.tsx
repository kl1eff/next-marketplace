'use client';

import React from 'react';
import styles from './styles.module.scss';
import Product from '@/types/Product';
import ProductCard from '../productCard/ProductCard';
import { Provider } from 'react-redux';
import store from '@/store';

type ProductsProps = {
  products: Product[];
};

function Products({ products }: ProductsProps) {
  return (
    <div className={styles.products}>
      {products.map((product) => {
        return <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} />;
      })}
    </div>
  );
}

export default Products;
