import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const CardProyecto = ({ titulo, descripcion, tecnologias, imagen, live, github }) => {
  return (
    <div className="bg-[var(--color-background)] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col">
      {/* Imagen del proyecto */}
       <div className="w-full h-56 flex items-center justify-center overflow-hidden">
        <img
          src={imagen}
          alt={titulo}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2 text-[var(--color-encabezados)]">{titulo}</h3>
        <p className="text-[var(--color-encabezados)] opacity-80 mb-4 flex-grow">{descripcion}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tecnologias.map((tec, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-[var(--bloques)] text-[var(--color-encabezados)] rounded-full"
            >
              {tec}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex justify-between gap-4 mt-auto">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[var(--botones)] text-[var(--espacio-blanco)] hover:bg-[var(--color-acento)] transition w-1/2"
          >
            Ver versión en vivo <FaExternalLinkAlt size={16} />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border-2 border-[var(--botones)] text-[var(--botones)] hover:bg-[var(--color-acento)] hover:text-[var(--espacio-blanco)] transition w-1/2"
          >
            Ver código <FaGithub size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProyecto;
