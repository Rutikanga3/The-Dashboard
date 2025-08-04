import { ThemeProvider } from './components/Context/ThemeContext';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Product';
import { ProductProvider } from './components/Context/ProductContext';
import Users from './pages/Users';
import { UserProvider } from './components/Context/UserContext';
// import Categories from './pages/Categories';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-0">
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={
                <ProductProvider>
                  <Products />
                </ProductProvider>
              } />
              <Route path="/users" element={
                <UserProvider>
                  <Users />
                </UserProvider>
              } />
              {/* <Route path="/categories" element={<Categories />} /> */}
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;