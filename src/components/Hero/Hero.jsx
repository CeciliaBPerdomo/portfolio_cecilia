import React from "react";

import heroImage from "../../assets/ImagenHero.png"; // tu imagen aquí

import {
  HeroContainerStyled,
  TextoContainer,
  ImagenContainer,
  BotonesContenedor
} from "./HeroStyled"

// Iconos
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiVite, SiAngular, SiPython, SiDjango } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb, DiScrum } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";

// UI
import Boton from "../UI/Botones/Boton";


const Hero = () => {
  return (
    <HeroContainerStyled>

      <TextoContainer>
        <h1>¡Hola mundo🌎​! </h1>
        <h1>Soy<span>Cecilia Perdomo</span>💻</h1>
        <h2>Desarrolladora full stack web</h2>
        <h3>Creo sitios web personalizados que cuentan tu historia.</h3>
        <h3>Conecta con tu público y haz que tu negocio destaque.</h3>

        <span>
          <GrHtml5 size={37} /> <TbBrandCss3 size={40} />
          <FaReact size={40} /> <SiVite size={37} />
          <RiNextjsFill size={40} /> <SiAngular size={37} />
          <IoLogoJavascript size={40} /> <SiPython size={37} /> <SiDjango size={37} />
          <DiMongodb size={40} /><FaNodeJs size={40} /> <DiScrum size={45} />
        </span>
        <BotonesContenedor>
          <Boton>Ver mis proyectos</Boton>
          <Boton>Hablemos de tu web</Boton>
        </BotonesContenedor>
      </TextoContainer>


      <ImagenContainer>
        <img src={heroImage} alt="Cecilia Perdomo" />
      </ImagenContainer>
    </HeroContainerStyled>
  );
};

export default Hero;
