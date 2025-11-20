import React from "react";
import { motion } from "framer-motion"; // npm install framer-motion
import { Link } from "react-router";

const Acerca = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center items-center py-20 bg-[var(--color-secondary-background)]"
    >
      {/* Contenedor principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-[90%] md:w-[85%] bg-[var(--color-destacado-arena)] border border-white/80 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between p-10 md:p-14 gap-10 md:gap-16"
      >
        {/* Columna izquierda - Imagen */}
        <div className="w-full md:w-2/5 flex justify-center">
          <motion.img
            src="/myAvatar.png"
            alt="Cecilia"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-[var(--botones)] shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </div>

        {/* Columna derecha - Texto */}
        <div className="w-full md:w-3/5 flex flex-col justify-center text-center md:text-left text-[var(--color-encabezados)] space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-encabezados)] mb-2">
            Acerca de mí
          </h2>

          <p className="text-lg leading-relaxed opacity-90">
            Soy <span className="font-semibold text-[var(--color-acento)]">Cecilia</span>,
            desarrolladora web full stack con pasión por crear experiencias digitales únicas y funcionales.
            Me encanta unir lo estético con lo técnico, dando vida a proyectos donde el diseño y el código se complementan.
          </p>

          <p className="text-lg leading-relaxed opacity-90">
            Combino tecnologías modernas con una visión humana: construir sitios que conecten con las personas y reflejen la esencia de cada marca.
            Mi enfoque está en crear interfaces limpias, intuitivas y llenas de propósito.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-4 px-8 py-3 bg-[var(--botones)] text-[var(--espacio-blanco)] rounded-2xl hover:bg-[var(--color-acento)] transition-colors duration-300 self-center md:self-start shadow-md"
            >
              Hablemos de tu web ✉️
            </motion.a>

            <Link to="/estudios">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-4 px-8 py-3 bg-[var(--botones)] text-[var(--espacio-blanco)] rounded-2xl hover:bg-[var(--color-acento)] transition-colors duration-300 self-center md:self-start shadow-md"
              >
                Ver mis estudios 🎓
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Acerca;
