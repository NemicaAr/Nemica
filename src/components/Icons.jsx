import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function BackgroundWithIconsCarousel({ bgDesktopIcon, bgMobileIcon, icons }) {
  // ⚙️ Configuración del slider con Keen Slider
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4, // Puedes ajustar cuántos iconos se muestran a la vez
      spacing: 5, // Espacio entre slides (en px)
    },
    breakpoints:{
      '(min-width: 1024px)': {
        slides: {
          perView: 8,
          spacing: 0,
        },
      },
    },
  });

  return (
    <div className="relative w-full h-[140px] md:h-[150px] lg:h-[230px] flex justify-center items-center">
      {/* 🎨 Imagen de fondo: cambia entre desktop y mobile */}
      <picture className="absolute top-0 left-0 w-full h-full">
        <source srcSet={bgDesktopIcon} media="(min-width: 768px)" />
        <img
          src={bgMobileIcon}
          alt="Fondo"
          className="w-full h-full object-cover md:clip-auto clip-path-mobile"
        />
      </picture>

      {/* 🚀 Carrusel de iconos */}
      <div ref={sliderRef} className="keen-slider absolute z-10 w-full px-4">
        {icons.map((icon, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <img
              src={icon}
              alt={`Icono ${index}`}
              className="w-25 h-25 lg:w-40 lg:h-40"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
