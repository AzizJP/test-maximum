'use client';
import { FC, useMemo } from 'react';

import { useAppSelector } from '../../hooks/redux';

import Banner from './Banner/Banner';
import CarInfo from './CarInfo/CarInfo';
import styles from './CarPage.module.scss';

const CarPage: FC = () => {
  const { currentCard } = useAppSelector(state => state.currentCard);
  const { feedData } = currentCard!;

  const title = useMemo(
    () => `${feedData.brandName} ${feedData.modelName} ${feedData.modelYear} года`,
    [feedData.brandName, feedData.modelName, feedData.modelYear],
  );
  const subtitle = useMemo(() => `VIN ${feedData.vin}`, [feedData.vin]);

  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </section>
      <CarInfo />
      <Banner />
    </div>
  );
};

export default CarPage;
