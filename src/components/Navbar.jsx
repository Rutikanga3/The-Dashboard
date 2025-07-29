import React , { useContext } from 'react';
import { CiSettings } from "react-icons/ci";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { ThemeContext } from "./Context/ThemeContext";
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`flex flex-wrap items-center px-6 py-4 shadow ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}>
      
      <div className="text-left mb-4 sm:mb-0">
        <h2 className={`font-bold text-2xl text-black ${
        theme === "dark" ? " text-white" : " text-black"
      }`}>Dashboard</h2>
        <p className={`"text-gray-600" ${theme== 'dark' ? 'text-white font-normal':'text-white font-medium'}`}>Welcome Back, Admin</p>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-4">
        <MdOutlineDarkMode  onClick={toggleTheme}className={`"text-2xl text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300" ${theme== 'dark' ? 'text-white font-normal':'text-black font-medium'}`}size={20} />
        <CiSettings className={`"text-2xl text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300" ${theme== 'dark' ? 'text-white font-normal':'text-black font-medium'}`} size={20} />
        <MdNotificationsNone className={`"text-2xl text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300" ${theme== 'dark' ? 'text-white font-normal':'text-black font-medium'}`} size={20}/>
        <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold"><LuUser/></div>

        <span className={`"text-gray-700 text-sm sm:text-base" ${theme== 'dark' ? 'text-white font-normal':'text-black font-medium'}`}>Admin@ihuza.com</span>
        
      </div>
    </div>
  );
}

export default Navbar;