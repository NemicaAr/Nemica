// src/components/Navbar.jsx
import PropTypes from "prop-types";
import { useState } from "react";

const NavBar = ({ imgSrc, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gris text-white">
      <section className="flex justify-center items-center flex-grow lg:justify-start lg:pl-8">
        <div className="mr-2">
          <img src={imgSrc} alt="Icono" className="h-12 w-12" />
        </div>
        <div>
          <img src={title} alt="Logo" className="h-8" />
        </div>
      </section>
      <ul
        className={` mr-9 lg:flex space-x-6 ${isMenuOpen ? "block" : "hidden"} lg:block`}
      >
        <li>
          <a href="#servicios" className="hover:text-gray-500 font-bold">Servicios</a>
        </li>
        <li>
          <a href="#contactenos" className="bg-white text-black font-bold px-4 py-2 rounded hover:bg-gray-200">Contactanos</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
