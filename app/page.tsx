import Products from '@/components/products/Products';
import styles from './page.module.scss';
import axios from 'axios';

async function getProducts() {
  const response = await axios.get('https://dummyjson.com/products')
  const json = response.data;
  return json.products;
}

export default async function Home() {
  const products = await getProducts();  
  return (
    <div className={styles.container}>
      <Products products={products} />
    </div>
  );
}
