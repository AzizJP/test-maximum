'use client';
import Image from 'next/image';
import { FC, memo, useMemo } from 'react';

import { useAppSelector } from '../../../hooks/redux';

import styles from './Logo.module.scss';

const Logo: FC = () => {
  const { isDesktop } = useAppSelector(state => state.breakpoint);

  const setImageDimensions = useMemo(() => {
    const imageDimansions = {
      width: 111,
      height: 30,
    };

    if (isDesktop) {
      imageDimansions.width = 154;
      imageDimansions.height = 42;
    }

    return imageDimansions;
  }, [isDesktop]);

  return (
    <div className={styles.section}>
      <Image
        src="/images/logo.svg"
        alt="Логотип компании"
        width={setImageDimensions.width}
        height={setImageDimensions.height}
        className={styles.icon}
        priority
      />
      <h5 className={styles.title}>Официальный дилер Максимум</h5>
    </div>
  );
};

export default memo(Logo);
