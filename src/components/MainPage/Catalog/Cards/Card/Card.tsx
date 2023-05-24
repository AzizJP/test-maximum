'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FC, memo, useCallback, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { setCurrentCard } from '../../../../../store/reducers/currentCardSlice';
import Button from '../../../../Shared/Button/Button';

import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = ({ card }) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { isDesktop } = useAppSelector(state => state.breakpoint);

  const { feedData, photobank } = card;

  const imageUrl = useMemo(() => photobank.imgs[0].url, [photobank.imgs]);
  const title = useMemo(
    () =>
      `${feedData.brandName} ${feedData.modelName} ${feedData.equipmentName} ${feedData.equipmentVariantTransmission}`,
    [feedData.brandName, feedData.equipmentName, feedData.equipmentVariantTransmission, feedData.modelName],
  );
  const specification = useMemo(
    () =>
      `${feedData.engine.engineCapacity} / ${feedData.engine.enginePower} Л.С. / ${feedData.engine.engineTransmission}`,
    [feedData.engine.engineCapacity, feedData.engine.enginePower, feedData.engine.engineTransmission],
  );

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

  const onButtonClick = useCallback(() => {
    router.push(`${pathname}/${card._id}`);
    dispatch(setCurrentCard(card));
    localStorage.setItem('currentCard', JSON.stringify(card));
  }, [card, dispatch, pathname, router]);

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
      <Button onClick={onButtonClick}>
        <span className={styles.buttonTitle}>Подробнее</span>
      </Button>
    </article>
  );
};

export default memo(Card);
