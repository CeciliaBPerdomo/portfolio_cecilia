import React from "react";

import heroImage from "../../assets/react.svg"; // tu imagen aquí

import {
  HeroContainerStyled,
} from "./HeroStyled"

const Hero = () => {
  return (
    <HeroContainerStyled className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-[var(--color-background)] text-[var(--color-text)]">
      
      {/* Texto */}
      <div className="md:w-1/2 flex flex-col justify-center items-start text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-heading)]">
          Soy Cecilia, <span className="text-[var(--color-primary)]">programadora full stack</span>.
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text)] mb-8">
          Creo sitios web personalizados que cuentan tu historia, conectan con tu público y hacen que tu negocio destaque.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-start">
          <a
            href="#proyectos"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-center"
          >
            Ver mis proyectos
          </a>
          <a
            href="#contacto"
            className="border border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-center"
          >
            Hablemos de tu web
          </a>
        </div>
      </div>

      {/* Imagen */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={heroImage}
          alt="Cecilia programadora full stack"
          className="w-3/4 md:w-full rounded-lg shadow-lg"
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
