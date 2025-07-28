import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';
import Overview from '../components/Overview';
import Navbar from '../components/Navbar';
import Secondcard from '../components/Secondcard';
import Usertable from '../components/Usertable';
import { ThemeContext } from '../components/Context/ThemeContext';


export default function Dashboard() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`flex h-screen ${theme}`}>
      <div className="w-64 bg-gray-800 text-white border-0 ">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className={`${theme === 'dark'? 'bg-gray-900':'bg-white'}`} >
          <Overview />
          <Cards />
          <Secondcard  />
          <Usertable  />

        </div>
      </div>
    </div>
  );
}