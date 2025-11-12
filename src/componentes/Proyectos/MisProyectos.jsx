import React from "react";
import proyectos from "../../data/proyectos.json";
import CardProyecto from "./CardProyecto";

const MisProyectos = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-[var(--espacio-blanco)] px-6 md:px-16 py-8 text-[var(--color-encabezados)]" // 🔹 antes py-16
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center"> {/* 🔹 antes mb-10 */}
        Mis Proyectos
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> {/* 🔹 antes gap-10 */}
        {proyectos.map((proyecto) => (
          <CardProyecto key={proyecto.id} {...proyecto} />
        ))}
      </div>
    </section>
  );
};

export default MisProyectos;
