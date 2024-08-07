'use client';

import styles from './styles.module.scss';
import Product from '@/types/Product';
import Image from 'next/image';
import { toCurrency } from '@/utils/formatter';
import { useState } from 'react';
import { useAppDispatch } from '@/store';
import { add } from '@/store/cartSlice';
import InfoCard from '../infoCard/InfoCard';
import { Rating } from 'react-simple-star-rating';

function ProductCard({ title, price, thumbnail, id, description, rating }: Product) {
  const dispatch = useAppDispatch();
  const [added, setAdded] = useState<boolean>(false);
  const [infoOpened, setInfoOpened] = useState<boolean>(false);

  const product: Product = {
    id,
    title,
    price,
    thumbnail,
    rating,
    description,
  };

  return (
    <>
      {infoOpened && <InfoCard product={product} setInfoOpened={setInfoOpened} />}
      <div className={styles.card} onClick={() => setInfoOpened(true)}>
        <p>{title}</p>
        <Image style={{ backgroundSize: 'cover' }} width="250" height="200" src={thumbnail} sizes="20" alt="photo" />
        <span>{toCurrency(price)}</span>
        <Rating initialValue={product.rating} size={22} allowFraction={true} readonly={true}/>
        <button
          className={added ? styles.added : ''}
          onClick={(e) => {
            setAdded(true);
            dispatch(add({ title, price, thumbnail, id }));
            setTimeout(() => {
              setAdded(false);
            }, 400);
            e.stopPropagation();
          }}
        >
          {added ? 'Added!' : 'Add'}
        </button>
      </div>
    </>
  );
}

export default ProductCard;
