'use client';

import styles from './styles.module.scss';
import Product from '@/types/Product';
import ProductCard from '../productCard/ProductCard';

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
