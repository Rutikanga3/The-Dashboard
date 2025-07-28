import React from 'react'
const statusColors = {
  "In Stock": "bg-green-100 text-green-800",
  "Low Stock": "bg-yellow-100 text-yellow-800",
  "Out of Stock": "bg-red-100 text-red-800",
};

const products = [
  { name: "MacBook Pro 16\"", category: "Laptops", date: "Dec 10, 2024", status: "In Stock" },
  { name: "Dell XPS 13", category: "Laptops", date: "Dec 9, 2024", status: "In Stock" },
  { name: "iPhone 15 Pro", category: "Mobile", date: "Dec 8, 2024", status: "Low Stock" },
  { name: "iPad Air", category: "Tablets", date: "Dec 7, 2024", status: "In Stock" },
  { name: "Surface Pro 9", category: "Tablets", date: "Dec 6, 2024", status: "Out of Stock" },
];

export default function Secondcard() {
  return (
     <div>
      <h4 className="text-lg font-bold mb-4">Recent Added Products</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h5 className="font-semibold">{product.name}</h5>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-sm text-gray-400">{product.date}</p>
            <span className={`text-xs px-2 py-1 rounded ${statusColors[product.status]}`}>{product.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
