import React from 'react';

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-[var(--color-background)] text-[var(--color-encabezados)] px-6 md:px-16 py-10">
      
      {/* Columna izquierda: texto */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
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
          <button className="px-6 py-3 bg-[var(--botones)] text-[var(--espacio-blanco)] rounded-2xl hover:bg-[var(--color-acento)] transition">
            Ver mis proyectos
          </button>
          <button className="px-6 py-3 border-2 border-[var(--botones)] text-[var(--botones)] rounded-2xl hover:bg-[var(--color-acento)] hover:text-[var(--espacio-blanco)] transition">
            Hablemos de tu web
          </button>
        </div>
      </div>

      {/* Columna derecha: imagen */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/hero-image.png"
          alt="Cecilia desarrollando"
          className="w-3/4 md:w-full max-w-md object-contain drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
