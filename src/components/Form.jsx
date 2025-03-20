import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    opciones: {
      arbolGenealogico: false,
      testimonios: false,
      circuloRelaciones: false,
      resumenBiografico: false,
      lineaDeTiempo: false,
      videoclip: false,
      museum: false,
      sintesisGenetica: false,
      pasiones: false,
      todos: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        opciones: {
          ...prevData.opciones,
          [name]: checked,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea un objeto con los parámetros que espera tu plantilla en EmailJS
    const templateParams = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      telefono: formData.telefono,
      arbolGenealogico: formData.opciones.arbolGenealogico ? "Sí" : "No",
      testimonios: formData.opciones.testimonios ? "Sí" : "No",
      circuloRelaciones: formData.opciones.circuloRelaciones ? "Sí" : "No",
      resumenBiografico: formData.opciones.resumenBiografico ? "Sí" : "No",
      lineaDeTiempo: formData.opciones.lineaDeTiempo ? "Sí" : "No",
      videoclip: formData.opciones.videoclip ? "Sí" : "No",
      museum: formData.opciones.museum ? "Sí" : "No",
      sintesisGenetica: formData.opciones.sintesisGenetica ? "Sí" : "No",
      pasiones: formData.opciones.pasiones ? "si" : "no",
      todos: formData.opciones.todos ? "Sí" : "No",
    };

    // Envía el correo utilizando EmailJS
    emailjs
      .send(
        "service_yx3bqlm", //  Service ID
        "template_v05pzeb", //  Template ID
        templateParams,
        "Orh5Q3QvZs364SHkL" // Public Key
      )
      .then(
        (result) => {
          console.log("Correo enviado con éxito:", result.text);
          // Opcional: reinicia el formulario
          setFormData({
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
            opciones: {
              arbolGenealogico: false,
              testimonios: false,
              circuloRelaciones: false,
              resumenBiografico: false,
              lineaDeTiempo: false,
              videoclip: false,
              museum: false,
              sintesisGenetica: false,
              pasiones: false,
              todos: false,
            },
          });
        },
        (error) => {
          console.error("Error al enviar correo:", error.text);
        }
      );
  };

  return (
    <div className="form-container bg-grisClaro my-15 mx-auto p-5 w-full lg:max-w-7xl sm:px-10 md:px-20 lg:px-30 text-purpura lg:rounded-xl">
      <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl lg:text-left py-3">
        Envíanos tus datos para que nos pongamos en contacto
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Nuevo grid para los inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:text-2xl">
          <div className="w-full">
            <label htmlFor="nombre" className="block text-sm font-medium text-left">
              Nombre
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="apellido" className="block text-sm font-medium text-left">
              Apellido
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Ingresa tu apellido"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-left">
              Email
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@mail.com"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="telefono" className="block text-sm font-medium text-left">
              Teléfono celular
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="011 0000 0000"
              required
            />
          </div>
        </div>

        {/* Sección para mobile */}
        <div className="bg-grisClaro rounded-lg mx-auto block lg:hidden mt-8">
          <p className="text-2xl font-bold lg:text-4xl lg:text-left lg:py-10 py-8">
            Elegí los formatos que más te interesen o el legado completo:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:text-xl md:w-[700px]">
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="todos"
                checked={formData.opciones.todos}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Todos
            </label>
            <label className="flex items-center gap-2 text-purpura">
              <input
                type="checkbox"
                name="arbolGenealogico"
                checked={formData.opciones.arbolGenealogico}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Árbol genealógico
            </label>
            <label className="flex items-center gap-2 text-purpura">
              <input
                type="checkbox"
                name="testimonios"
                checked={formData.opciones.testimonios}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Testimonios
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="circuloRelaciones"
                checked={formData.opciones.circuloRelaciones}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Círculo de relaciones
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="resumenBiografico"
                checked={formData.opciones.resumenBiografico}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Resumen biográfico
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="lineaDeTiempo"
                checked={formData.opciones.lineaDeTiempo}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Línea de tiempo
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="videoclip"
                checked={formData.opciones.videoclip}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Videoclip
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="museum"
                checked={formData.opciones.museum}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Museum
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="sintesisGenetica"
                checked={formData.opciones.sintesisGenetica}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Síntesis genética
            </label>
          </div>
        </div>

        {/* Sección para desktop */}
        <div className="bg-grisClaro rounded-lg mx-auto w-auto hidden lg:block mt-8">
          <p className="text-2xl font-bold lg:text-4xl lg:text-left lg:py-10 py-8">
            Elegí los formatos que más te interesen o el legado completo:
          </p>
          <div className="grid grid-cols-3 gap-3 lg:text-[18px]">
            {/* Fila 1 */}
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="todos"
                checked={formData.opciones.todos}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Todos
            </label>
            <div></div>
            <div></div>
            {/* Fila 2 y siguientes */}
            <label className="flex items-center gap-2 text-purpura">
              <input
                type="checkbox"
                name="arbolGenealogico"
                checked={formData.opciones.arbolGenealogico}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Árbol genealógico
            </label>
            <label className="flex items-center gap-2 text-purpura">
              <input
                type="checkbox"
                name="testimonios"
                checked={formData.opciones.testimonios}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Testimonios
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="circuloRelaciones"
                checked={formData.opciones.circuloRelaciones}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Círculo de relaciones
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="resumenBiografico"
                checked={formData.opciones.resumenBiografico}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Resumen biográfico
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="lineaDeTiempo"
                checked={formData.opciones.lineaDeTiempo}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Línea de tiempo
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="videoclip"
                checked={formData.opciones.videoclip}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Videoclip
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="museum"
                checked={formData.opciones.museum}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Museum
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="sintesisGenetica"
                checked={formData.opciones.sintesisGenetica}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Síntesis genética
            </label>
            <label className="flex items-center gap-3 text-purpura lg:py-2">
              <input
                type="checkbox"
                name="Pasiones"
                checked={formData.opciones.sintesisGenetica}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Pasiones
            </label>
          </div>
        </div>

        <div className="lg:p-5 p-5">
          <button
            type="submit"
            className="mt-6 w-full bg-purpura text-white font-semibold py-2 rounded-lg shadow-md hover:bg-purple-800 transition md:w-60"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
