// src/components/Navbar.jsx
import PropTypes from "prop-types";
import { useState } from "react";

const NavBar = ({ imgSrc, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gris text-gray-200 p-4 relative">
      {/* 🔹 Vista Desktop */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <img src={imgSrc} alt="Icono" className="h-12 w-12" />
          <img src={title} alt="Logo" className="h-10 ml-2" />
        </div>
        {/* Menú (Servicios y Contactanos) a la derecha */}
        <ul className="flex space-x-6">
          <li>
            <a href="#servicios" className="hover:text-white font-bold">
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#contactenos"
              className="bg-gray-200 text-black font-bold px-4 py-2 rounded hover:bg-white"
            >
              Contactanos
            </a>
          </li>
        </ul>
      </div>

      {/* 🔹 Vista Mobile */}
      <div className="lg:hidden relative flex items-center justify-center">
        {/* Logo centrado */}
        <div className="text-center">
          <img src={imgSrc} alt="Icono" className="h-12 w-12 inline" />
          <img src={title} alt="Logo" className="h-10 inline ml-2" />
        </div>
        {/* Botón hamburguesa posicionado a la derecha */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-4 focus:outline-none"
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
      </div>

      {/* 🔹 Menú Mobile Desplegable (overlay) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-4 mt-2 z-20">
          <ul className="flex flex-col space-y-2 bg-gris p-4 w-auto">
            <li>
              <a
                href="#servicios"
                className="text-gray-200 hover:text-white font-bold"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#contactenos"
                className="text-gray-200 hover:text-white font-bold"
              >
                Contactanos
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

NavBar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavBar;
