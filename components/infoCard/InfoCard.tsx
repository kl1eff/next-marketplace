import Product from '@/types/Product';
import styles from './styles.module.scss';
import { toCurrency } from '@/utils/formatter';
import { Rating } from 'react-simple-star-rating';
import { Dispatch, SetStateAction, useState } from 'react';
import { useAppDispatch } from '@/store';
import { add } from '@/store/cartSlice';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';

type InfoProductProps = {
  product: Product;
  setInfoOpened: Dispatch<SetStateAction<boolean>>;
};

function InfoProduct({ product, setInfoOpened }: InfoProductProps) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    setAdded(true);
    dispatch(add({ title: product.title, price: product.price, thumbnail: product.thumbnail, id: product.id }));
    setTimeout(() => {
      setAdded(false);
    }, 400);
  };
  const [added, setAdded] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div>
        <button onClick={() => setInfoOpened(false)}>
          <IoClose size={30} />
        </button>

        <div>
          <Image style={{ backgroundSize: 'cover' }} width="400" height="350" className={styles.img} src={product.thumbnail} sizes="20" alt="photo" />
          <div>
            <h1>{product.title}</h1>
            <Rating initialValue={product.rating} size={19} allowFraction={true} readonly={true} />
            <h3>Description</h3>
            <p>{product.description}</p>
            <div>
              <span>{toCurrency(product.price)}</span>
              <button className={added ? styles.added : ''} onClick={handleClick}>
                {added ? 'Added!' : 'Add to cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProduct;
