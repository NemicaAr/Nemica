import PropTypes from "prop-types";

export default function ConmemorativeSection({
  h1,
  birthDate,
  deathDate,
  mainImage,
  text,
  secondaryImage,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-12 py-8 text-white bg-gris space-y-6">
      {/* 🟣 Nombre y fechas: centrados arriba siempre */}
      <div className="text-center">
        <h1 className="text-2xl font-serif font-bold">{h1}</h1>
        <p className="text-lg italic text-gray-300">
          {birthDate} — {deathDate}
        </p>
      </div>

      {/* 📱 Mobile: flujo natural / 🖥️ Desktop: grid con posiciones específicas */}
      <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-12 lg:space-y-0">
        
        {/* Imagen principal */}
        <div className="lg:row-start-1 lg:col-start-1 lg:h-full">
          <img
            src={mainImage}
            alt="Imagen principal"
            className="w-full h-auto lg:h-full lg:w-full object-contain"
          />
        </div>

        <div className="lg:row-span-2 lg:col-start-2 text-left px-4 lg:px-0">
          <p className="whitespace-pre-line leading-relaxed text-gray-200 font-bold text-base">
            {text}
          </p>
        </div>

        {/* Imagen secundaria */}
        <div className="lg:row-start-2 lg:col-start-1 lg:h-full">
          <img
            src={secondaryImage}
            alt="Imagen secundaria"
            className="w-full h-auto lg:h-full lg:w-full  object-contain"
          />
        </div>
      </div>
    </div>
  );
}
