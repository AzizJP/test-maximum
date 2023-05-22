import './globals.scss';
import Header from '../components/Header/Header';
import { Providers } from '../store/provider';

export const metadata = {
  title: 'Официальный дилер автомобилей в Санкт-Петербурге – автохолдинг «Максимум»',
  description:
    '⭐⭐⭐⭐⭐ Автомобильный холдинг «Максимум» является официальным дилером брендов Honda, Ford, KIA, Genesis, Audi, Mitsubishi и Hyundai в Санкт-Петербурге. Автомобили в кредит, трейд-ин и помощь при подборе в салоне официального дилерского центра.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="page">
        <Providers>
          <Header />
          <main className="main">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
