import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 10000, easing: (t) => t };

export default function BackgroundWithIconsCarousel({ bgDesktopIcon, bgMobileIcon, icons }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 5,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 0,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const handleIconClick = () => {
    const target = document.getElementById("servicios");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-[140px] md:h-[150px] lg:h-[230px] flex justify-center items-center overflow-hidden">
      {/* 🎨 Imagen de fondo */}
      <picture className="absolute top-0 left-0 w-full h-full">
        <source srcSet={bgDesktopIcon} media="(min-width: 768px)" />
        <img src={bgMobileIcon} alt="Fondo" className="w-full h-full object-cover" />
      </picture>

      {/* 🚀 Carrusel de iconos con movimiento continuo */}
      <div ref={sliderRef} className="keen-slider absolute z-10 w-full px-4">
        {[...icons, ...icons].map((icon, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <img
              src={icon}
              alt={`Icono ${index}`}
              className="w-25 h-28 lg:w-40 lg:h-45 cursor-pointer"
              onClick={handleIconClick} // Evento de clic para desplazarse al carrusel
            />
          </div>
        ))}
      </div>
    </div>
  );
}
