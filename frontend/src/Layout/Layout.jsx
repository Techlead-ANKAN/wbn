// src/layout/Layout.jsx
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Scrollable Outlet container */}
      <main className="flex-1 overflow-y-auto pt-20 pb-16 px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
