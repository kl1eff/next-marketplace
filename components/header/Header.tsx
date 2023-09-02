import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href='/'>ClickHead</Link>
      <Link className={styles.button} href='/cart'><FiShoppingCart size={30} color='black'/></Link>
    </header>
  );
}

export default Header;
