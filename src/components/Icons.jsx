import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Carousel2D = ({ bgDesktopIcon, bgMobileIcon, icons, titles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Autoplay
  const intervalRef = useRef(null);
  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      instanceRef.current?.next();
    }, 1000);
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  // Scroll a sección
  const handleIconClick = () => {
    const target = document.getElementById("servicios");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  // Duplicamos los íconos para aumentar la densidad visual (opcional)
  const repeatedIcons = [...icons, ...icons];

  return (
    <div className="relative w-full h-[160px] md:h-[300px] lg:h-[260px] flex justify-center items-center overflow-hidden group">
      {/* Fondo */}
      <picture className="absolute top-0 left-0 w-full h-full">
        <source srcSet={bgDesktopIcon} media="(min-width: 768px)" />
        <img
          src={bgMobileIcon}
          alt="Fondo"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Carrusel */}
      <div
        ref={sliderRef}
        className="keen-slider w-full  px-4"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        {repeatedIcons.map((icon, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col items-center justify-center p-2"
            onTouchStart={stopAutoplay}
            onTouchEnd={startAutoplay}
          >
            <img
              src={icon}
              alt={`Icono ${index + 1}`}
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 cursor-pointer transition-transform hover:scale-110"
              onClick={handleIconClick}
            />
            <div className="mt-2 text-center w-full max-w-[160px] md:max-w-[200px]">
              <h2 className="text-xs md:text-sm lg:text-base font-medium">
                {titles?.[index % titles.length] || `Título ${index + 1}`}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel2D;
