'use client';
import Image from 'next/image';
import { FC, memo } from 'react';

import { useAppSelector } from '../../../../hooks/redux';

import styles from './Specification.module.scss';

const Specification: FC = () => {
  const { currentCard } = useAppSelector(state => state.currentCard);
  const { isDesktop } = useAppSelector(state => state.breakpoint);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Характеристики</h2>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Image
            src="/images/car-icon.svg"
            alt="Иконка машины"
            width={isDesktop ? 90 : 45}
            height={isDesktop ? 90 : 45}
            priority
          />
          <p>{`${currentCard?.feedData.modelYear} год выпуска`}</p>
        </div>
        <div className={styles.item}>
          <Image
            src="/images/engine-icon.svg"
            alt="Иконка двигателя"
            width={isDesktop ? 90 : 45}
            height={isDesktop ? 90 : 45}
            priority
          />
          <p>{`${currentCard?.feedData.engine.engineCapacity?.toString().replace('.', ',')} л / ${
            currentCard?.feedData.engine.enginePower
          } л.с / ${currentCard?.feedData.equipmentVariantFuelType}`}</p>
        </div>
        <div className={styles.item}>
          <Image
            src="/images/transmission-icon.svg"
            alt="Иконка коробки передач"
            width={isDesktop ? 90 : 45}
            height={isDesktop ? 90 : 45}
            priority
          />
          <p>{`КП - ${currentCard?.feedData.equipmentVariantTransmissionType}`}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Specification);
