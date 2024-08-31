import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-8 sticky top-0 bg-gray-100 z-30 border-b border-gray-600">
      <nav id="navbar" className="flex items-center justify-between w-full">
        <div id="nav_logo" className="text-xl text-yellow-500"> {/* Substitua por um logo se necessário */}
          Logo
        </div>

        <ul id="nav_list" className="hidden md:flex list-none gap-12">
          <li className="nav-item">
            <a href="#home" className="text-gray-700 font-semibold hover:text-gray-900">Início</a>
          </li>
          <li className="nav-item">
            <a href="#menu" className="text-gray-700 font-semibold hover:text-gray-900">Serviços</a>
          </li>
          <li className="nav-item">
            <a href="#equipe" className="text-gray-700 font-semibold hover:text-gray-900">Equipe</a>
          </li>
        </ul>

        <button
          id="mobile_btn"
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </nav>

      <div
        id="mobile_menu"
        className={`md:hidden ${mobileMenuOpen ? 'flex' : 'hidden'} flex-col items-center`}
      >
        <ul id="mobile_nav_list" className="flex flex-col gap-3 mt-3">
          <li className="nav-item text-center">
            <a href="#home" className="text-gray-700 font-semibold hover:text-gray-900">Início</a>
          </li>
          <li className="nav-item text-center">
            <a href="#menu" className="text-gray-700 font-semibold hover:text-gray-900">Serviços</a>
          </li>
          <li className="nav-item text-center">
            <a href="#equipe" className="text-gray-700 font-semibold hover:text-gray-900">Equipe</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
