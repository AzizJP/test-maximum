'use client';
import { FC, useCallback, useEffect } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { setIsDesktop } from '../../store/reducers/breakpointSlice';
import { DESKTOP_BREAKPOINT } from '../../utils/constants';

import styles from './Header.module.scss';
import Logo from './Logo/Logo';

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const handleResize = useCallback(() => {
    dispatch(setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <header className={styles.container}>
      <Logo />
    </header>
  );
};

export default Header;
