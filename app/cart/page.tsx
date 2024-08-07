'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toCurrency } from '@/utils/formatter';
import { RootState } from '@/store';
import styles from './styles.module.scss';
import CartItem from '@/components/cartItem/CartItem';
import Link from 'next/link';
import Converter from '@/components/converter/Converter';
import Checkout from '@/components/checkout/Checkout';

function page() {
  const items = useSelector((store: RootState) => store.cart.items);
  const total = useSelector((store: RootState) => store.cart.total);
  const usd = useSelector((state: RootState) => state.wallet.usd);
  const coin = useSelector((state: RootState) => state.wallet.coin);

  const [usdPayment, setUsdPayment] = useState<boolean>(true);

  if (items.length !== 0) {
    return (
      <div className={styles.cart}>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <CartItem id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} rating={0} description={''}/>
            </li>
          ))}
        </ul>
        <div className={styles.payment}>
          <div className={styles.balance}>
            <span>{toCurrency(usd)}</span>
            <span>|</span>
            <span>{coin}&#xa4;</span>
          </div>
          <Converter />
          <div className={styles.checkout}>
            <div className={styles.total}>
              <p>Total: {usdPayment ? toCurrency(total) : total + '¤'}</p>
            </div>
            <div className={styles.currencySelect}>
              <div>
                <input defaultChecked type="radio" id="r1" name="currency" value="USD" onChange={() => setUsdPayment(true)} />
                <label htmlFor="r1">USD</label>
              </div>
              <div>
                <input type="radio" id="r2" name="currency" value="COIN" onChange={() => setUsdPayment(false)} />
                <label htmlFor="r2">COIN</label>
              </div>
            </div>
            <Checkout isUsd={usdPayment} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.nothing}>
        <h2>Your cart is empty</h2>
        <Link href="/" className={styles.link}>
          continue shopping
        </Link>
      </div>
    );
  }
}

export default page;
