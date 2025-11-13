import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-[var(--color-background)] text-[var(--color-encabezados)] px-6 md:px-16 pt-20 pb-10">

      {/* Columna izquierda: texto */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center text-center space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hola, soy <span className="text-[var(--color-acento)]">Cecilia</span>
        </h1>

        <h1 className="text-lg md:text-xl text-[var(--color-acento)]">
          Desarrolladora web full stack
        </h1>

        <h3 className="text-lg md:text-xl">
          Creo sitios web personalizados que cuentan tu historia.
        </h3>
        <h3 className="text-lg md:text-xl">
          Conecta con tu público y haz que tu emprendimiento destaque.
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-[var(--botones)] text-[var(--espacio-blanco)] rounded-2xl hover:bg-[var(--color-acento)] transition"
          >
            Ver mis proyectos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 border-2 border-[var(--botones)] text-[var(--botones)] rounded-2xl hover:bg-[var(--color-acento)] hover:text-[var(--espacio-blanco)] transition"
          >
            Hablemos de tu web
          </motion.button>
        </div>
      </motion.div>

      {/* Columna derecha: imagen */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.img
          src="/hero-image.png"
          alt="Cecilia Perdomo"
          className="w-3/4 md:w-full max-w-md object-contain drop-shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
