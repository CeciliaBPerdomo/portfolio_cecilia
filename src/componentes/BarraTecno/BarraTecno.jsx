import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiVite, SiAngular, SiPython, SiDjango } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb, DiScrum } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";

const BarraTecno = () => {
  const iconStyle =
    "text-[var(--color-encabezados)] hover:text-[var(--color-acento)] transition-transform hover:scale-110";

  return (
    <div
      className="
        w-full bg-[var(--espacio-blanco)] py-3 flex justify-center flex-wrap gap-6 shadow-md z-40
        md:fixed md:bottom-0 md:left-0
      "
    >
      <GrHtml5 size={37} className={iconStyle} />
      <TbBrandCss3 size={40} className={iconStyle} />
      <FaReact size={40} className={iconStyle} />
      <SiVite size={37} className={iconStyle} />
      <RiNextjsFill size={40} className={iconStyle} />
      <SiAngular size={37} className={iconStyle} />
      <IoLogoJavascript size={40} className={iconStyle} />
      <SiPython size={37} className={iconStyle} />
      <SiDjango size={37} className={iconStyle} />
      <DiMongodb size={40} className={iconStyle} />
      <FaNodeJs size={40} className={iconStyle} />
      <DiScrum size={45} className={iconStyle} />
    </div>
  );
};

export default BarraTecno;
