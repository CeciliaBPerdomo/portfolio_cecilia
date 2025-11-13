import React from "react";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[var(--color-background)]">
      
      {/* Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-12 text-[var(--color-encabezados)] text-center"
      >
        Cuéntame sobre tu web soñada ✨
      </motion.h2>

      {/* Contenedor de la fila */}
      <div className="w-[90%] flex flex-col md:flex-row gap-8 items-start">

        {/* Formulario - 50% */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 p-8 border border-[var(--espacio-blanco)] shadow-lg rounded-md"
        >
          <div className="mb-4">
            <label className="block mb-2 font-medium text-[var(--color-encabezados)]">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-acento)]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium text-[var(--color-encabezados)]">
              Email
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-acento)]"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium text-[var(--color-encabezados)]">
              Mensaje
            </label>
            <textarea
              placeholder="Escribe tu mensaje..."
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2"
              rows={5}
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded font-semibold text-[var(--espacio-blanco)] bg-[var(--botones)] hover:bg-[var(--color-acento)] transition-colors"
          >
            Enviar
          </button>
        </motion.form>

        {/* Imagen - 50% */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/contacto.png"
            alt="Contacto"
            className="max-w-full h-auto"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Contacto;
