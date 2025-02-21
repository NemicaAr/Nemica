import instagramIcon from "../assets/images/icons/instagramIcon.png";
import linkedinIcon from "../assets/images/icons/linkedinIcon.svg";

export default function Footer() {
  return (
    <footer className="bg-gris text-white p-6 lg:p-4">
      <h3 className="pb-5 text-xl ">Seguinos</h3>

      <div className="flex justify-center gap-6">
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
    </footer>
  );
}
