'use client';
import Image from 'next/image';
import { FC, memo } from 'react';

import { useAppSelector } from '../../../../hooks/redux';

import styles from './Price.module.scss';

const Price: FC = () => {
  const { currentCard } = useAppSelector(state => state.currentCard);
  const { isDesktop } = useAppSelector(state => state.breakpoint);

  if (!currentCard) return null;

  const numberToPrice = (num: number) =>
    num.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  return (
    <div className={styles.container}>
      <p className={styles.title}>{numberToPrice(currentCard?.feedData.price)}</p>
      <div className={styles.guarantee}>
        <Image
          src="/images/guarantee-icon.svg"
          alt="Изображение галочки гарантии"
          width={isDesktop ? 39 : 18}
          height={isDesktop ? 42 : 20}
          priority
        />
        <p>Гарантия юр. чистоты</p>
      </div>
    </div>
  );
};

export default memo(Price);
