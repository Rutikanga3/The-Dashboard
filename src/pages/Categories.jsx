import React, { useContext } from 'react';
import { ThemeContext } from '../components/Context/ThemeContext';
import { useCategory } from '../hooks/useCategory';
import Layout from '../components/Layout';

export default function Categories() {
  const { theme } = useContext(ThemeContext);
  const { categories } = useCategory();

  return (
    <Layout>
      <div className={`flex-1 p-4 sm:p-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Categories</h1>
        <div className={`${theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-600 bg-white'} rounded p-4 sm:p-6 m-2 sm:m-4`}>
          <hr className={`my-4 border-0 h-px ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`p-4 rounded shadow ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-800'}`}
              >
                <h5 className="font-semibold">{category.name}</h5>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {category.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}