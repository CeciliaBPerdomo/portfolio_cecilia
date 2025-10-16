import React from "react";

import heroImage from "../../assets/ImagenHero.png"; // tu imagen aquí

import {
  HeroContainerStyled,
  TextoContainer,
  ImagenContainer,
  BotonesContenedor
} from "./HeroStyled"

// Iconos
import { FaReact, FaNodeJs  } from "react-icons/fa6";
import { SiVite, SiAngular, SiPython, SiDjango } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb, DiScrum  } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";


const Hero = () => {
  return (
    <HeroContainerStyled>

      <TextoContainer>
        <h1>¡Hola mundo🌎​! Soy <span>Cecilia Perdomo</span></h1>
        <h2>Desarrolladora full stack web</h2>
        <h3>Creo sitios web personalizados que cuentan tu historia, </h3> 
        <h3>conectan con tu público y hacen que tu negocio destaque.</h3>

        <span>
          <GrHtml5 size={40}/> <TbBrandCss3 size={40} />
          <FaReact size={40}/> <SiVite size={40}/> 
          <RiNextjsFill size={40}/> <SiAngular size={40} /> 
          <IoLogoJavascript size={40} /> <SiPython size={40} /> <SiDjango size={40} />
          <DiMongodb size={40} /><FaNodeJs size={40}/> <DiScrum size={40}/>
        </span>
        <BotonesContenedor>
          <button>Ver mis proyectos</button>
          <button>Hablemos de tu web</button>
        </BotonesContenedor>
      </TextoContainer>


      <ImagenContainer>
        <img src={heroImage} alt="Cecilia Perdomo" />
      </ImagenContainer>
    </HeroContainerStyled>
  );
};

export default Hero;
