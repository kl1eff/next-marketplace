import React from 'react';
import styles from './styles.module.scss'
import Link from 'next/link';

function page() {
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
