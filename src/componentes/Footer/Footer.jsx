import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[var(--color-encabezados)] border-t border-[var(--color-acento)] py-10 shadow-inner">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">

        {/* Columna 1 – Identidad */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <img
            src="/myAvatar.png"
            alt="Cecilia"
            className="w-16 h-16 rounded-full border border-[var(--color-acento)] object-cover"
          />
          <h2 className="text-xl font-semibold">Cecilia Perdomo</h2>
          <p className="text-sm opacity-80 max-w-xs">
            Desarrolladora Web Full Stack.
            Me encanta crear experiencias digitales que conectan ideas con personas.
          </p>
        </div>

        {/* Columna 2 – Enlaces */}
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-lg font-semibold mb-2">Navegación</h3>
          <a href="#about" className="hover:text-[var(--color-acento)] transition">Acerca de mí</a>
          <a href="#projects" className="hover:text-[var(--color-acento)] transition">Mis proyectos</a>
          <a href="#contact" className="hover:text-[var(--color-acento)] transition">Contacto</a>
        </div>

        {/* Columna 3 – Contacto */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-center md:text-right">
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <p>
            📧 <a href="mailto:cecilia.perdomo@gmail.com" className="hover:text-[var(--color-acento)] transition">
              cecilia.perdomo@gmail.com
            </a>
          </p>
          <p>📍 Colonia del Sacramento, Uruguay</p>
          <div className="flex gap-4 justify-center md:justify-end mt-2">
            <a
              href="https://wa.me/59899387921?text=%C2%A1Hola%20Ceci!%20Te%20escribo%20porque%20quiero%20info%20sobre%20mi%20pr%C3%B3xima%20p%C3%A1gina%20web%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://github.com/CeciliaBPerdomo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-acento)] transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/cecilia-perdomo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-acento)] transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-center mt-10 text-sm opacity-70">
        © {new Date().getFullYear()} Cecilia Perdomo. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
