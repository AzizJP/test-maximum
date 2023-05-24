import Image from 'next/image';
import { FC, memo } from 'react';

import Button from '../../Shared/Button/Button';

import styles from './Banner.module.scss';

const Banner: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Кредит на новый Chery Tiggo</h2>
      <div className={styles.wrapper}>
        <p className={styles.text}>Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»</p>
        <Button className={styles.button}>
          <p>Оформить</p>
        </Button>
      </div>
      <Image src="/images/credit-image.png" alt="Изображение машины" fill className={styles.image} />
    </section>
  );
};

export default memo(Banner);
