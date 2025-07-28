import React from 'react';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';
import Overview from '../components/Overview';
import Navbar from '../components/Navbar';
import Secondcard from '../components/Secondcard';
import Usertable from '../components/Usertable';


export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white ">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4">
          <Overview />
          <Cards />
          <Secondcard/>
          <Usertable />

        </div>
      </div>
    </div>
  );
}