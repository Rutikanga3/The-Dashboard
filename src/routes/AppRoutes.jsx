import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Products from '../pages/Product';
import Users from '../pages/Users';
import { ProductProvider } from '../components/Context/ProductContext';
import { UserProvider } from '../components/Context/UserContext';
import { LoggedinProvider } from '../components/Context/LoggedinContext';
import { CategoryProvider } from '../components/Context/CategoryContext';
import Categories from '../pages/Categories';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<LoggedinProvider><Login /></LoggedinProvider>} />
      <Route path="/products"element={<ProductProvider><Products /></ProductProvider>}/>
      <Route path="/users"element={<UserProvider><Users /></UserProvider>} />
      <Route path="/category"element={<CategoryProvider><Categories/></CategoryProvider>} />
    </Routes>
  );
}