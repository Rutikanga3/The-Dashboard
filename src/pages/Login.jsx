import React, { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"; // Import both icons
import { ThemeContext } from '../components/Context/ThemeContext';

export default function Login() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access toggleTheme from context

  return (
    <div className={`h-screen flex items-center justify-center px-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-white'}`}>
      {/* Theme Toggle Icon */}
      {theme === 'dark' ? (
        <MdOutlineLightMode
          onClick={toggleTheme}
          className="absolute top-4 right-4 text-2xl cursor-pointer text-white hover:text-gray-400 transition duration-300"
        />
      ) : (
        <MdOutlineDarkMode
          onClick={toggleTheme}
          className="absolute top-4 right-4 text-2xl cursor-pointer text-black hover:text-gray-700 transition duration-300"
        />
      )}

      <div className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Login</button>
        </form>
      </div>
    </div>
  );
}