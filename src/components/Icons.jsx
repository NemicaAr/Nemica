export default function BackgroundWithIcons({ bgDesktopIcon, bgMobileIcon, icons }) {
    return (
      <div className="relative w-full h-[140px] md:h-[150px] lg:h-[230px] flex justify-center items-center ">
        {/* Imagen de fondo con cambio entre desktop y mobile */}
        <picture className="absolute top-0 left-0 w-full h-full">
          <source srcSet={bgDesktopIcon} media="(min-width: 768px)" />
          <img
            src={bgMobileIcon}
            alt="Fondo"
            className="w-full h-full object-cover md:clip-auto clip-path-mobile"
          />
        </picture>
  
        {/* Contenedor de iconos alineados horizontalmente */}
        <div className="absolute -left-48 lg:-left-56 flex gap-4 lg:gap-20 z-10 overflow-hidden">
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt={`Icono ${index}`} className="w-25 h-25 lg:w-40 lg:h-40" />
          ))}
        </div>
      </div>
    );
  }
  