'use client';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback } from 'react';

import { useAppDispatch } from '../../../../hooks/redux';
import { useAppSelector } from '../../../../hooks/redux';
import { setBrand, setEngineCapacity, setEquipmentName } from '../../../../store/reducers/activeFiltersSlice';
import { Brand, Capacity, Equipment, FilterItems } from '../../../../types/types';
import Button from '../../../Shared/Button/Button';

import { BRANDS, FILTERS, FILTERS_ITEMS } from './Filter.constants';
import styles from './Filter.module.scss';

const Filter: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();
  const dispatch = useAppDispatch();
  const { isDesktop } = useAppSelector(state => state.breakpoint);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(name, value);

      return newParams.toString();
    },
    [searchParams],
  );

  const onFilter = useCallback(
    (newQuery: Brand | Capacity | Equipment, type: keyof FilterItems = 'brand') => {
      if (type === 'brand') {
        router.replace(`/${newQuery}`);
        return dispatch(setBrand(newQuery as Brand));
      }
      if (type === 'capacity') {
        const string = newQuery.slice(0, 3);
        router.replace(`${pathname}?${createQueryString(`${type}`, `${string}`)}`);
        return dispatch(setEngineCapacity(newQuery as Capacity));
      }
      if (type === 'equipment') {
        router.replace(`${pathname}?${createQueryString(`${type}`, `${newQuery}`)}`);
        return dispatch(setEquipmentName(newQuery as Equipment));
      }
    },
    [createQueryString, dispatch, pathname, router],
  );

  const onResetFilter = useCallback(() => {
    router.replace(`${pathname}`);
  }, [pathname, router]);

  return (
    <div className={styles.container}>
      {!isDesktop &&
        BRANDS.map(({ id, name }) => (
          <Button
            key={id}
            variant="filter"
            onClick={() => onFilter(name)}
            className={`${styles.button} ${params.brand === name ? styles.button_active : ''}`}
          >
            <span className={styles.buttonTitle}>{name}</span>
          </Button>
        ))}
      {isDesktop && (
        <>
          {FILTERS.map(({ filtersId, filtersName, type }) => (
            <div key={filtersId} className={styles.wrapper}>
              <h5 className={styles.title}>{filtersName}</h5>
              <div className={styles.filters}>
                {FILTERS_ITEMS[type].map(({ id, name }) => (
                  <Button
                    key={id}
                    variant="filter"
                    onClick={() => onFilter(name, type)}
                    className={`${styles.button} ${
                      params.brand === name || name.includes(searchParams.get(type)!) ? styles.button_active : ''
                    }`}
                  >
                    <span className={styles.buttonTitle}>{name}</span>
                  </Button>
                ))}
              </div>
            </div>
          ))}
          <Button variant="resetFilter" onClick={onResetFilter}>
            <span className={styles.resetButtonTitle}>Сбросить фильтр</span>
          </Button>
        </>
      )}
    </div>
  );
};

export default Filter;
