import React, { useContext } from 'react';
import { ThemeContext } from '../components/Context/ThemeContext';
import { useProduct } from '../hooks/useProduct';
import Layout from '../components/Layout';

export default function Products() {
  const { theme } = useContext(ThemeContext);
  const { products } = useProduct();

  const statusColors = {
    "In Stock": "bg-green-100 text-green-800",
    "Low Stock": "bg-yellow-100 text-yellow-800",
    "Out of Stock": "bg-red-100 text-red-800",
  };

  return (
    <Layout>
      <div className={`flex-1 p-4 sm:p-6 ${theme === 'dark' ? 'bg-gray-200 text-black' : 'bg-white text-black'}`}>
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Products</h1>
        <div
          className={`${
            theme === 'dark' ? 'text-black bg-gray-100' : 'text-gray-600 bg-white'
          } rounded p-4 sm:p-6 m-2 sm:m-4`}
        >
          <h4 className="text-lg font-bold mb-4">Recent Added Products</h4>
          <hr
            className={`my-4 border-0 h-px ${
              theme === 'dark' ? 'bg-gray-400' : 'bg-gray-300'
            }`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className={`p-4 rounded shadow ${
                  theme === 'dark' ? 'bg-gray-100 text-black' : 'bg-white text-gray-800'
                }`}
              >
                <h5 className="font-semibold">{product.name}</h5>
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
                  }`}
                >
                  {product.category}
                </p>
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {product.date}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded ${statusColors[product.status]}`}
                >
                  {product.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}