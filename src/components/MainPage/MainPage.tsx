import { FC } from 'react';

import Catalog from './Catalog/Catalog';
import styles from './MainPage.module.scss';
import { MainPageProps } from './MainPage.types';

const MainPage: FC<MainPageProps> = ({ brand }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{`Автомобили ${brand} в СПб`}</h1>
      <Catalog brand={brand} />
    </div>
  );
};

export default MainPage;
