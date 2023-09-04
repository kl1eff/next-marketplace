'use client';

import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { replenish, withdraw } from '@/store/walletSlice';
import { RootState } from '@/store';
import { useState } from 'react';
import { useAppDispatch } from '@/store';

function Converter() {
  const [coinInput, setCoinInput] = useState<number>(0);
  const [usdInput, setUsdInput] = useState<number>(0);

  const usdAmount = useSelector((state: RootState) => state.wallet.usd);
  const coinAmount = useSelector((state: RootState) => state.wallet.coin);

  const dispatch = useAppDispatch();

  const toCoin = () => {
    if (usdInput <= usdAmount && usdInput > 0) {
      dispatch(replenish({
        currency: 'coin',
        amount: usdInput,
      }))
      dispatch(withdraw({
        currency: 'usd',
        amount: usdInput,
      }))
    }
  };
  
  const toUsd = () => {
    if (coinInput <= coinAmount && coinInput > 0) {
      dispatch(replenish({
        currency: 'usd',
        amount: coinInput,
      }))
      dispatch(withdraw({
        currency: 'coin',
        amount: coinInput,
      }))
    }
  };

  return (
    <div className={styles.converter}>
      <div>
        <input type="text" placeholder="USD" onChange={(e) => setUsdInput(+e.target.value)} />
        <button onClick={toCoin}>USD 	&rarr; COIN</button>
      </div>
      <div>
        <input type="text" placeholder="COIN" onChange={(e) => setCoinInput(+e.target.value)} />
        <button onClick={toUsd}>COIN 	&rarr; USD</button>
      </div>
    </div>
  );
}

export default Converter;
