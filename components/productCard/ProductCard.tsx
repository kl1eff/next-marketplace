'use client';

import styles from './styles.module.scss';
import Product from '@/types/Product';
import Image from 'next/image';
import { toCurrency } from '@/utils/formatter';
import { useState } from 'react';
import { useAppDispatch } from '@/store';
import { add } from '@/store/cartSlice';


function ProductCard({ title, price, thumbnail, id }: Product) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    setAdded(true);
    dispatch(add({ title, price, thumbnail, id }));
    setTimeout(() => {
      setAdded(false);
    }, 400);
  };
  const [added, setAdded] = useState<boolean>(false);
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <Image style={{backgroundSize: 'cover'}} width="250" height="200" src={thumbnail} sizes="20" alt="photo" />
      <span>{toCurrency(price)}</span>
      <button className={added ? styles.added : ""} onClick={handleClick}>{added ? "Added!" : "Add"}</button>
    </div>
  );
}

export default ProductCard;
