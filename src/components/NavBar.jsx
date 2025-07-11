// src/components/NavBar.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ imgSrc, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handleGoHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-gris text-gray-200 p-4 relative">
      {/* 🔹 Vista Desktop */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Logo a la izquierda con navegación */}
        <div className="flex items-center cursor-pointer" onClick={handleGoHome}>
          <img src={imgSrc} alt="Icono" className="h-12 w-12" />
          <img src={title} alt="Logo" className="h-10 ml-2" />
        </div>
        {/* Menú a la derecha */}
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => handleScrollTo("servicios")}
              className="hover:text-white font-bold"
            >
              Servicios
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("contactenos")}
              className="hover:text-white font-bold"
            >
              Contactanos
            </button>
          </li>
          <li>
            <a
              className="bg-gray-200 text-black font-bold px-4 py-2 rounded hover:bg-white"
            >
              Log In
            </a>
          </li>
        </ul>
      </div>

      {/* 🔹 Vista Mobile */}
      <div className="lg:hidden relative flex items-center justify-center">
        {/* Logo centrado clickeable */}
        <div
          className="text-center cursor-pointer"
          onClick={handleGoHome}
        >
          <img src={imgSrc} alt="Icono" className="h-12 w-12 inline" />
          <img src={title} alt="Logo" className="h-10 inline ml-2" />
        </div>
        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-4 focus:outline-none"
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
      </div>

      {/* 🔹 Menú Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-4 mt-2 z-20">
          <ul className="flex flex-col space-y-2 bg-gris p-4 w-auto">
            <li>
              <button
                onClick={() => {
                  handleScrollTo("servicios");
                  setIsMenuOpen(false);
                }}
                className="text-gray-200 hover:text-white font-bold"
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScrollTo("contactenos");
                  setIsMenuOpen(false);
                }}
                className="text-gray-200 hover:text-white font-bold"
              >
                Contactanos
              </button>
            </li>
            <li>
              <a
                className="bg-gray-200 text-black font-bold px-6 py-0.5 rounded hover:bg-white"
              >
                Log In
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
