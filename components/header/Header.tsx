'use client'
import { RootState } from '@/store';
import styles from './styles.module.scss';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';


function Header() {
  const itemsAmount = useSelector((state: RootState) => state.cart.items).length
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href='/'>ClickHead</Link>
      <div>
        <Link className={styles.button} href='/cart'><FiShoppingCart size={30} color='black'/></Link>
        {(itemsAmount > 0) && <span>{itemsAmount}</span>}
      </div>
      
    </header>
  );
}

export default Header;
