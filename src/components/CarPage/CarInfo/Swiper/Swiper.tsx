'use client';
import Image from 'next/image';
import { FC, memo } from 'react';

import { useAppSelector } from '../../../../hooks/redux';

import styles from './Swiper.module.scss';

const Swiper: FC = () => {
  const { currentCard } = useAppSelector(state => state.currentCard);
  const { photobank } = currentCard!;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src={photobank.imgs[0].url}
          alt="Изображение автомобиля"
          fill
          priority
          className={styles.carImage}
          sizes="(max-width: 675px) 626px, (max-width: 1240px) 876px"
        />
      </div>
      <div className={styles.scroll}>
        <button className={`${styles.thumb} ${styles.thumb_active}`} />
        <button className={styles.thumb} />
        <button className={styles.thumb} />
        <button className={styles.thumb} />
      </div>
    </div>
  );
};

export default memo(Swiper);
