import { FC, memo } from 'react';

import Cards from './Cards/Cards';
import styles from './Catalog.module.scss';
import { CatalogProps } from './Catalog.types';
import Filter from './Filter/Filter';

const getCars = async (brand: string) => {
  const response = await fetch(`https://maximum.expert/api/stock-test?brand=${brand}`);

  return response.json();
};

/* @ts-expect-error Async Server Component */
const Catalog: FC<CatalogProps> = async ({ brand }) => {
  const cars = await getCars(brand);

  return (
    <section className={styles.container}>
      <Filter />
      <Cards cars={cars.list} />
    </section>
  );
};

export default memo(Catalog);
