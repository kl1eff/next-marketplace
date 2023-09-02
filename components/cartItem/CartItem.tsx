import Product from '@/types/Product';
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { RootState, useAppDispatch } from '@/store';
import { add, remove } from '@/store/cartSlice';
import { useSelector } from 'react-redux';
import { toCurrency } from '@/utils/formatter';

function CartItem(props: Product) {
  const dispatch = useAppDispatch();

  const item = useSelector((state: RootState) => {
    return state.cart.items.find((item) => item.id === props.id);
  });
  const itemTotalPrice = item ? item.amount * item.price : 0;

  return (
    <div className={styles.cartItem}>
      <Image src={props.thumbnail} width={120} height={80} alt="img" />
      <p>{props.title}</p>
      <div>
        <span>{toCurrency(itemTotalPrice)}</span>
        <div className={styles.amount}>
          <button onClick={() => dispatch(add(props))}>&#9650;</button>
          <span>{item?.amount}</span>
          <button onClick={() => dispatch(remove(props.id))}>&#9660;</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
