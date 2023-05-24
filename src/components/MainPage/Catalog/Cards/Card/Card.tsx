'use client';
import Image from 'next/image';
import { FC, memo, useMemo } from 'react';

import { useAppSelector } from '../../../../../hooks/redux';
import Button from '../../../../Shared/Button/Button';

import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = ({ imageUrl, title, specification }) => {
  const { isDesktop } = useAppSelector(state => state.breakpoint);

  const setImageDimensions = useMemo(() => {
    const imageDimansions = {
      width: 280,
      height: 180,
    };

    if (isDesktop) {
      imageDimansions.width = 440;
      imageDimansions.height = 292;
    }

    return imageDimansions;
  }, [isDesktop]);

  return (
    <article className={styles.container}>
      <Image
        src={imageUrl}
        alt="Превью автомобиля"
        width={setImageDimensions.width}
        height={setImageDimensions.height}
        priority
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.specification}>{specification}</p>
      <Button>
        <span className={styles.buttonTitle}>Подробнее</span>
      </Button>
    </article>
  );
};

export default memo(Card);
