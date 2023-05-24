'use client';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { FC, useMemo } from 'react';

const Card = dynamic(() => import('./Card/Card'), { ssr: false });
import styles from './Cards.module.scss';
import { Car, CardsProps } from './Cards.types';
const Cards: FC<CardsProps> = ({ cars }) => {
  const searchParams = useSearchParams();

  const filteredCards = useMemo(() => {
    let newState = [...cars];
    searchParams.forEach((value, key) => {
      if (key === 'equipment') {
        newState = newState.filter(car => car.feedData.equipmentName.includes(value));
      }

      if (key === 'capacity') {
        newState = newState.filter(car => car.feedData.engine.engineCapacity.toString() === value.replace(',', '.'));
      }
    });
    return newState;
  }, [cars, searchParams]);

  return (
    <div className={styles.container}>
      {filteredCards.length === 0 ? (
        <h2>К сожалению, автомобилей по выбранным фильтрам нет</h2>
      ) : (
        <ul className={styles.list}>
          {filteredCards.map((car: Car) => (
            <li key={car._id} className={styles.listItem}>
              <Card card={car} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cards;
