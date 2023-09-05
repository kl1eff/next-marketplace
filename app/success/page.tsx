'use client';
import styles from './styles.module.scss';
import Link from 'next/link';
import { clear } from '@/store/cartSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store';

function page() {
  const dispatch = useAppDispatch();
  useEffect(() => void dispatch(clear()));

  return (
    <div className={styles.success}>
      <h2>Thank you for your purchase!</h2>
      <Link href="/" className={styles.link}>
        back to catalogue
      </Link>
    </div>
  );
}

export default page;
