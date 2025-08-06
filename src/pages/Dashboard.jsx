import React, { useContext } from 'react';
import Layout from '../components/Layout';
import Cards from '../components/Cards';
import Overview from '../components/Overview';
import Secondcard from '../components/Secondcard';
import Usertable from '../components/Usertable';
import { ThemeContext } from '../components/Context/ThemeContext';
import { ProductProvider } from '../components/Context/ProductContext';
import { UserProvider } from '../components/Context/UserContext';

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);

  return (
    <Layout>
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <Overview />
        <Cards />
        <ProductProvider>
          <Secondcard />
        </ProductProvider>
        <UserProvider>
          <Usertable />
        </UserProvider>
      </div>
    </Layout>
  );
}