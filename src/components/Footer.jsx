import instagramIcon from "../assets/images/icons/instagramIcon.png";
import linkedinIcon from "../assets/images/icons/linkedinIcon.svg";

export default function Footer() {
  return (
    <footer className="bg-gris text-white p-6 lg:p-4 relative">
      <h3 className="pb-5 text-xl"></h3>

      {/* Links e iconos de redes sociales ocultos */}
      <div className="flex justify-center gap-6 hidden">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
        </a>
        <h2 className="font-bold text-2xl text-center">|</h2>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
        </a>
      </div>

      {/* Copyright abajo a la derecha */}
      <div className="absolute bottom-4 right-4 text-sm">
        <p>© {new Date().getFullYear()} Nemica Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
