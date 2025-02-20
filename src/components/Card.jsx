import PropTypes from "prop-types";


export default function Card({ title, imgSrc, description, h1 }) {
  return (
    <div className="flex flex-col w-[300px] h-[500px] bg-gray-100 rounded-b-sm shadow-lg overflow-hidden border-2 border-white ">
      <div className="relative h-[250px]">
        <img
          src={imgSrc}
          alt="Imagen"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-black to-transparent flex items-center justify-center">
          <h2 className="text-xl font-bold text-white text-center">{title}</h2>
        </div>
      </div>


      {/* Contenedor de h1 y description */}
      <section className="bg-gray-100 p-4 flex flex-col">
        <div className="text-purpura text-2xl text-left">
          <h1 className="font-semibold">{h1}</h1>
        </div>
        <div className="mt-2 pb-8 text-gray-800 text-left">
          <p className="text-lg tracking-tight leading-5">{description}</p>
        </div>
      </section>
    </div>
  );
}


Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  description: PropTypes.string,
};