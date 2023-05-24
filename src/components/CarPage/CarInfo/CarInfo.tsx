import { FC } from 'react';

import styles from './CarInfo.module.scss';
import Price from './Price/Price';
import Specification from './Specification/Specification';
import Swiper from './Swiper/Swiper';

const CarInfo: FC = () => {
  return (
    <section className={styles.container}>
      <Price />
      <Swiper />
      <Specification />
    </section>
  );
};

export default CarInfo;
