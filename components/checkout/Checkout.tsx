'use client'
import styles from './styles.module.scss';
import { RootState, useAppDispatch } from '@/store';
import { withdraw } from '@/store/walletSlice';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

function Checkout({ isUsd }: { isUsd: boolean }) {
  const userAmount = useSelector((state: RootState) => isUsd ? state.wallet.usd : state.wallet.coin);
  const cartTotal =  useSelector((state: RootState) => state.cart.total);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const buttonHandle = async () => {
    if (userAmount >= cartTotal) {
      dispatch(withdraw({
        currency: isUsd ? 'usd' : 'coin',
        amount: cartTotal
      }))
      router.push('/success');
    } else {
      alert('insufficient funds')
    }
  }
  return <button className={styles.checkout} onClick={buttonHandle}>Checkout</button>;
}

export default Checkout;
