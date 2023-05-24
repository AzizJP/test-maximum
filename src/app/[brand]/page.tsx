import { NextPage } from 'next';

import MainPage from '../../components/MainPage/MainPage';
import { Brand } from '../../types/types';

interface CardsProps {
  params: {
    brand: Brand;
  };
}

const Home: NextPage<CardsProps> = ({ params: { brand } }) => {
  return <MainPage brand={brand} />;
};

export default Home;
